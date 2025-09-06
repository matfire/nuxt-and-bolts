import { render } from "@react-email/render";
import { createTransport } from "nodemailer";
import { env } from "../env";
import type { Props as ResetPasswordProps } from "./templates/ResetPassword";
import type { Props as WelcomeProps } from "./templates/Welcome";

import ResetPasswordEmail from "./compiled/templates/ResetPassword";
import WelcomeEmail from "./compiled/templates/Welcome";

const transport = createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  auth:
		env.SMTP_USER && env.SMTP_PASSWORD
		  ? {
		      user: env.SMTP_USER,
		      pass: env.SMTP_PASSWORD,
		    }
		  : undefined,
});

const templates = {
  Welcome: {
    component: WelcomeEmail,
    props: undefined as unknown as WelcomeProps,
  },
  ResetPassword: {
    component: ResetPasswordEmail,
    props: undefined as unknown as ResetPasswordProps,
  },
} as const;

type TemplateName = keyof typeof templates;
type TemplateProps<T extends TemplateName> = (typeof templates)[T]["props"];

interface MailSettings {
  to: string;
  subject: string;
}

export async function sendEmail<T extends TemplateName>(
  name: T,
  props: TemplateProps<T>,
  mailSettings: MailSettings,
) {
  const body = await render(templates[name].component(props));
  await transport.sendMail({
    from: env.SMTP_FROM,
    to: mailSettings.to,
    subject: mailSettings.subject,
    html: body,
  });
}

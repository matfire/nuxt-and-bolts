import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { button, text } from "../utils/styles.js";

export interface Props {
  name: string;
  url: string;
}

function ResetPasswordEmail({ name, url }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Reset Password for NxB</Preview>
      <Body
        style={{ backgroundColor: "#f6f9fc", fontFamily: "Arial, sans-serif" }}
      >
        <Container style={{ backgroundColor: "#ffffff", padding: "20px" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            Hi
            {" "}
            {name}
            ,
          </Text>
          <Text style={text}>
            Someone recently requested a password change for your Dropbox
            account. If this was you, you can set a new password here:
          </Text>
          <Button style={button} href={url}>
            Reset Password
          </Button>
          <Text style={text}>
            If you don&apos;t want to change your password or didn&apos;t
            request this, just ignore and delete this message.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ResetPasswordEmail;

ResetPasswordEmail.PreviewProps = {
  name: "Matt",
  url: "https://example.com/reset?token=335647",
};

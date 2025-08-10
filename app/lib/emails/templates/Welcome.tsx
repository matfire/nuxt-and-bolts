import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";

export interface Props {
  name: string;
}

function WelcomeEmail({ name }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to our service!</Preview>
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
          <Text>
            Thanks for signing up! We're excited to have you on board.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;

WelcomeEmail.PreviewProps = {
  name: "Matt",
};

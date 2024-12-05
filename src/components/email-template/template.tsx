import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailProps {
  username?: string;
  link?: string;
}

export const Template = ({ username, link }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Email Verification</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://firebasestorage.googleapis.com/v0/b/estatetech.appspot.com/o/3d_logo.png?alt=media&token=b277d5eb-50af-4713-8427-beed5770e1f8`}
          width="32"
          height="32"
          alt="Github"
        />

        <Text style={title}>Verify your email address</Text>
        <Section style={section}>
          <Text style={text}>
            Hey <strong>{username}</strong>!
          </Text>
          <Text style={text}>
            Thanks for starting the new Guds account creation process. We want
            to make sure it is really you. Please click on below button to verify
            your account . If you don&apos;t want to create an account, you can
            ignore this message.
          </Text>

          <Button style={button} href={`${link}`}>
            Verify Email
          </Button>
        </Section>

        <Text style={footer}>
          GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
        </Text>
      </Container>
    </Body>
  </Html>
);

Template.PreviewProps = {
  username: 'alanturing',
} as EmailProps;

export default Template;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center' as const,
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
  fontWeight: 500,
};

const section = {
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const button = {
  fontSize: '14px',
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '8px 14px',
  cursor: 'pointer',
};

const links = {
  textAlign: 'center' as const,
};

const link = {
  color: '#0366d6',
  fontSize: '12px',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};

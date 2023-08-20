import { FC } from 'react';
import { Main } from '@components/main';
import { Roles } from '@components/roles';
import { Section } from '@components/section';
import { ContactUs } from '@components/contact-us';
import { ScrollToHashElement } from '@components/scroll-to-hash-element';
import { useTheme } from '@mui/material';
import { Banner } from '@components/banner.tsx';

export const Home: FC = () => {
  const { palette } = useTheme();
  return (
    <>
      <ScrollToHashElement />
      <Section height="100vh">
        <Main />
      </Section>
      <Section height="70vh">
        <Roles />
      </Section>
      <Section height="20vh" backgroundColor={palette.primary.light}>
        <Banner />
      </Section>
      <Section id="contact-us">
        <ContactUs />
      </Section>
    </>
  );
};

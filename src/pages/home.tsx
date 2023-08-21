import { FC } from 'react';
import { Main } from '@components/main';
import { Roles } from '@components/roles';
import { Section } from '@components/section';
import { ContactUs } from '@components/contact-us';
import { ScrollToHashElement } from '@components/scroll-to-hash-element';
import { Container, Divider, useTheme } from '@mui/material';
import { Banner22nd } from '@components/banner-22nd.tsx';
import { BannerExcellence } from '@components/banner-excellence.tsx';
import { Modules } from '@components/modules.tsx';
import { Consultants } from '@components/consultants.tsx';

export const Home: FC = () => {
  const { palette } = useTheme();
  return (
    <>
      <ScrollToHashElement />
      <Section id="platform" height="100vh" alignItems="center">
        <Main />
      </Section>
      <Section height="80vh">
        <Roles />
      </Section>
      <Section height="40vh" alignItems="center" backgroundColor={palette.primary.light}>
        <Banner22nd />
      </Section>
      <Section height="100vh">
        <Modules />
      </Section>
      <Section height="50vh" alignItems="center" backgroundColor={palette.primary.dark}>
        <BannerExcellence />
      </Section>
      <Section id="consultants" alignItems="center" height="100vh">
        <Consultants />
      </Section>
      <Container maxWidth="xl">
        <Divider />
      </Container>
      <Section id="contact-us" alignItems="center" height="100vh">
        <ContactUs />
      </Section>
    </>
  );
};

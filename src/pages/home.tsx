import { FC } from 'react';
import { Section } from '@components/section';
import { ScrollToHashElement } from '@components/scroll-to-hash-element';
import { Container, Divider, useTheme } from '@mui/material';
import { Main } from '@pages/sections/main.tsx';
import { Roles } from '@pages/sections/roles.tsx';
import { Banner22nd } from '@pages/sections/banner-22nd.tsx';
import { Modules } from '@pages/sections/modules.tsx';
import { BannerExcellence } from '@pages/sections/banner-excellence.tsx';
import { Consultants } from '@pages/sections/consultants.tsx';
import { ContactUs } from '@pages/sections/contact-us.tsx';

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
        <Divider sx={{ mb: 10 }} />
      </Container>
      <Section id="contact-us" alignItems="center" height="100vh">
        <ContactUs />
      </Section>
    </>
  );
};

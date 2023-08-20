import { FC } from 'react';
import { Main } from '@components/main';
import { Roles } from '@components/roles';
import { Section } from '@components/section';
import { ContactUs } from '@components/contact-us';
import { ScrollToHashElement } from '@components/scroll-to-hash-element';
import { useTheme } from '@mui/material';
import { Banner22nd } from '@components/banner-22nd.tsx';
import { BannerExcellence } from '@components/banner-excellence.tsx';

export const Home: FC = () => {
  const { palette } = useTheme();
  return (
    <>
      <ScrollToHashElement />
      <Section height="100vh" alignItems="center">
        <Main />
      </Section>
      <Section height="75vh">
        <Roles />
      </Section>
      <Section height="40vh" alignItems="center" backgroundColor={palette.primary.light}>
        <Banner22nd />
      </Section>
      <Section height="50vh" alignItems="center" backgroundColor={palette.primary.dark}>
        <BannerExcellence />
      </Section>
      <Section id="contact-us">
        <ContactUs />
      </Section>
    </>
  );
};
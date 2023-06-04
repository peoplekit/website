import { FC } from 'react';
import { Main } from '@components/main';
import { Roles } from '@components/roles';
import { Stack } from '@mui/material';
import { Section } from '@components/section';
import { Features } from '@components/features';
import { ContactUs } from '@components/contact-us';
import { ScrollToHashElement } from '@components/scroll-to-hash-element';

export const Home: FC = () => {
  return (
    <Stack spacing={3}>
      <ScrollToHashElement />
      <Section>
        <Main />
      </Section>
      <Section>
        <Roles />
      </Section>
      <Section id="contact-us">
        <ContactUs />
      </Section>
    </Stack>
  );
};

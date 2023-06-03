import { FC } from 'react';
import { Main } from '@components/main';
import { Roles } from '@components/roles';
import { Stack } from '@mui/material';
import { Section } from '@components/section';
import { Features } from '@components/features';
import { ContactUs } from '@components/contact-us';

export const Home: FC = () => {
  return (
    <Stack spacing={3}>
      <Section>
        <Main />
      </Section>
      <Section>
        <Roles />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section>
        <ContactUs />
      </Section>
    </Stack>
  );
};

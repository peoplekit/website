import { FC } from 'react';
import { Main } from '@components/main';
import { Roles } from '@components/roles';
import { Stack } from '@mui/material';
import { Section } from '@components/section';

export const Home: FC = () => {
  return (
    <Stack spacing={3}>
      <Section>
        <Main />
      </Section>
      <Section>
        <Roles />
      </Section>
    </Stack>
  );
};

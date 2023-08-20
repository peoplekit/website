import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { SectionContent } from '@components/section.content.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export const Banner: FC = () => {
  return (
    <SectionContent>
      <Stack textAlign="center" sx={{ py: 4 }} gap={3}>
        <FontAwesomeIcon icon={faRocket} size="8x" />
        <Typography variant="h3">Features worthy of a 22nd-century people team.</Typography>
      </Stack>
    </SectionContent>
  );
};

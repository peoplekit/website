import React, { FC } from 'react';
import { Box } from '@mui/material';

export type SectionProps = {
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return (
    <Box component="section" sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      {children}
    </Box>
  );
};

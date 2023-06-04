import React, { FC } from 'react';
import { Box } from '@mui/material';

export type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ id, children }) => {
  return (
    <Box id={id} component="section" sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      {children}
    </Box>
  );
};

import React, { FC } from 'react';
import { Box } from '@mui/material';

export type SectionProps = {
  id?: string;
  children: React.ReactNode;
  height?: string;
  backgroundColor?: string;
};

export const Section: FC<SectionProps> = ({ id, height, children, backgroundColor }) => {
  return (
    <Box id={id} component="section" sx={{ minHeight: height || '60vh', display: 'flex', alignItems: 'center', backgroundColor }}>
      {children}
    </Box>
  );
};

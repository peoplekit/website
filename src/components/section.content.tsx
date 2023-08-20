import { FC, ReactNode } from 'react';
import { Container } from '@mui/material';

export interface SectionContentProps {
  children: ReactNode;
}

export const SectionContent: FC<SectionContentProps> = ({ children }) => {
  return <Container maxWidth="xl">{children}</Container>;
};

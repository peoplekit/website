import { FC, ReactNode } from 'react';
import { Breakpoint, Container } from '@mui/material';

export interface SectionContentProps {
  children: ReactNode;
  maxWidth?: Breakpoint;
}

export const SectionContent: FC<SectionContentProps> = ({ children, maxWidth }) => {
  return <Container maxWidth={maxWidth || 'xl'}>{children}</Container>;
};

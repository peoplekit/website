import React, { FC } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

import { createTheme } from '@mui/material';

export const theme = createTheme({
  shape: {
    borderRadius: 10
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50
        }
      }
    }
  },
  typography: {
    fontFamily: 'Roboto, Poppins, sans-serif',
    button: {
      textTransform: 'none'
    },
    h1: {
      fontWeight: 700,
      fontSize: '90px',
      fontFamily: 'Poppins'
    },
    h2: {
      fontWeight: 700,
      fontSize: '56px',
      fontFamily: 'Poppins'
    },
    h3: {
      fontFamily: 'Poppins'
    },
    h4: {
      fontFamily: 'Poppins'
    },
    h5: {
      fontFamily: 'Poppins',
      fontSize: '36px',
      fontWeight: 500
    },
    h6: {
      fontWeight: 600,
      fontFamily: 'Poppins'
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '24px'
    },
    subtitle2: {
      color: '#971EEF',
      fontSize: '16px',
      fontFamily: 'Poppins'
    },
    body1: {
      fontSize: '18px'
    }
  },
  palette: {
    primary: {
      light: '#971EEF33',
      main: '#971EEF',
      dark: '#16163f'
    },
    secondary: {
      light: '#F3ADFF',
      main: '#d500f9',
      dark: '#68007A'
    },
    text: {
      primary: '#16163D'
    }
  }
});

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
      fontFamily: 'Poppins'
    },
    h2: {
      fontFamily: 'Poppins'
    },
    h3: {
      fontFamily: 'Poppins'
    },
    h4: {
      fontFamily: 'Poppins'
    },
    h5: {
      fontFamily: 'Poppins'
    },
    h6: {
      fontFamily: 'Poppins'
    }
  },
  palette: {
    primary: {
      light: '#9d46ff',
      main: '#6200EA',
      dark: '#3B008F'
    },
    secondary: {
      light: '#F3ADFF',
      main: '#d500f9',
      dark: '#68007A'
    }
  }
});

import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const lightTheme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'Roboto'].join(','),
  },
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#0C969D',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'black',
          fontSize: '12px',
        },
        arrow: {
          color: 'black',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '48px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F9F9',
          borderRadius: '1rem',
          fontSize: '0.875rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        multiline: {
          borderRadius: '4px !important',
          border: '1px solid #54B5BA',
          backgroundColor: '#FDFDFD !important',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingLeft: '1.5rem',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          margin: '0px !important',
        },
      },
    },
  },
});

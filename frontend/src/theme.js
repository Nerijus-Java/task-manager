import { createTheme } from "@mui/material";

//LIGHT THEME
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4338ca',
    },
    background: {
      default: '#F3F4F6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1e293b',
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)', 
          border: '1px solid rgba(0,0,0,0.03)'
        },
        elevation2: {
          boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0,0,0,0.03)'
        }
      }
    }
  }
});

//DARK THEME
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    background: {
      default: '#121214',
      paper: '#18181b',   
    },
    text: {
      primary: '#f4f4f5',
    }
  },
});
import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#00b4d8' },
        secondary: { main: '#1a237e' },
        background: { default: '#0a1128', paper: '#121b36' },
        text: { primary: '#ffffff', secondary: '#b0bec5' }
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#1a237e' }, // The deep blue for the light navbar
        secondary: { main: '#00b4d8' },
        background: { default: '#f5f7fa', paper: '#ffffff' },
        text: { primary: '#0a1128', secondary: '#546e7a' }
    },
});
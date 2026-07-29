import { createTheme } from "@mui/material";

const createCustomTheme = (mode, primaryMain, defaultBg, paperBg, textPrimary) => {
  return createTheme({
    palette: {
      mode,
      primary: { main: primaryMain },
      background: { default: defaultBg, paper: paperBg },
      text: { primary: textPrimary }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          elevation1: {
            boxShadow: mode === 'light' ? '0px 10px 25px rgba(0, 0, 0, 0.05)' : '0px 10px 25px rgba(0, 0, 0, 0.2)',
            border: mode === 'light' ? '1px solid rgba(0,0,0,0.03)' : '1px solid rgba(255,255,255,0.05)'
          }
        }
      }
    }
  });
};

export const themes = {
  default: {
    light: createCustomTheme('light', '#4338ca', '#F3F4F6', '#FFFFFF', '#1e293b'),
    dark: createCustomTheme('dark', '#6366f1', '#121214', '#18181b', '#f4f4f5'),
  },
  forest: {
    light: createCustomTheme('light', '#166534', '#fbfdf9', '#ffffff', '#14532d'),
    dark: createCustomTheme('dark', '#22c55e', '#051c0d', '#0f2916', '#f0fdf4'),
  },
  sunset: {
    light: createCustomTheme('light', '#e11d48', '#fff1f2', '#ffffff', '#881337'),
    dark: createCustomTheme('dark', '#fb7185', '#2c1922', '#3f2531', '#fff1f2'),
  },
  midnight: {
    light: createCustomTheme('light', '#0284c7', '#f0f9ff', '#ffffff', '#0c4a6e'),
    dark: createCustomTheme('dark', '#38bdf8', '#0f172a', '#1e293b', '#f0f9ff'),
  },
  cyberpunk: {
    light: createCustomTheme('light', '#0891b2', '#f8fafc', '#ffffff', '#0f172a'),
    dark: createCustomTheme('dark', '#22d3ee', '#09090b', '#18181b', '#f4f4f5'),
  },
  coffee: {
    light: createCustomTheme('light', '#b45309', '#fdf8f6', '#ffffff', '#451a03'),
    dark: createCustomTheme('dark', '#d97706', '#1c1917', '#292524', '#f5f5f4'),
  },
  lavender: {
    light: createCustomTheme('light', '#7c3aed', '#fbf9ff', '#ffffff', '#3b0764'),
    dark: createCustomTheme('dark', '#a855f7', '#1e1b4b', '#312e81', '#faf5ff'),
  },
  arctic: {
    light: createCustomTheme('light', '#0284c7', '#f0f9ff', '#ffffff', '#0369a1'),
    dark: createCustomTheme('dark', '#38bdf8', '#030712', '#0f172a', '#f0f9ff'),
  },
  matrix: {
    light: createCustomTheme('light', '#059669', '#ecfdf5', '#ffffff', '#064e3b'),
    dark: createCustomTheme('dark', '#10b981', '#022c22', '#064e3b', '#ecfdf5'),
  },
  amber: {
    light: createCustomTheme('light', '#d97706', '#fffbeb', '#ffffff', '#78350f'),
    dark: createCustomTheme('dark', '#f59e0b', '#18181b', '#27272a', '#fef3c7'),
  },
  ruby: {
    light: createCustomTheme('light', '#be123c', '#fff1f2', '#ffffff', '#881337'),
    dark: createCustomTheme('dark', '#e11d48', '#1f1014', '#2d151c', '#ffe4e6'),
  },
  teal: {
    light: createCustomTheme('light', '#0f766e', '#f0fdfa', '#ffffff', '#134e4a'),
    dark: createCustomTheme('dark', '#14b8a6', '#042f2e', '#115e59', '#ccfbf1'),
  }
};
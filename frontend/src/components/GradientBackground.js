import { Box, useTheme } from '@mui/material';

function GradientBackground({ children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </Box>
    </Box>
  );
}

export default GradientBackground;
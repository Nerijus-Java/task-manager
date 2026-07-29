import { Box, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

function GradientBackground({ children, backgroundStyle = 'gradient' }) {
  const theme = useTheme();
  const defaultBg = theme.palette.background.default;
  const primaryMain = theme.palette.primary.main;
  const isDark = theme.palette.mode === 'dark';

  const modernGradient = `radial-gradient(circle at 85% 85%, ${alpha(primaryMain, isDark ? 0.10 : 0.04)} 0%, transparent 65%), ${defaultBg}`;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: defaultBg,
        background: backgroundStyle === 'gradient' ? modernGradient : defaultBg,
        backgroundAttachment: 'fixed',
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </Box>
    </Box>
  );
}

export default GradientBackground;
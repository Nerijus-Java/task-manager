import { Box } from '@mui/material';

function AnimatedBackground({ children, isDark }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          background: isDark
            ? 'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.14) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
         
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </Box>
    </Box>
  );
}

export default AnimatedBackground;
import { Box } from '@mui/material';

function AnimatedBackground({ children, isDark }) {
return (
<Box
      sx={{
        minHeight: '100vh',
        background: isDark
          ? 'linear-gradient(180deg, #111827 0%, #030712 100%)' 
          : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)', 
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </Box>
    </Box>
  );
}


export default AnimatedBackground;
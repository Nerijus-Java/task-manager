import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function NavBar({ toggleTheme, isDark }) {
  return (
    <AppBar 
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        top: 0,
        zIndex: 1200,
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper'
      }}
    >
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.5px', transition: 'opacity 0.2s ease', '&:hover': { opacity: 0.7 } }}>
            <Box component="span" sx={{ color: 'primary.main' }}>Task</Box>
            <Box component="span" sx={{ color: 'text.primary' }}>Manager</Box>
          </Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Tooltip title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
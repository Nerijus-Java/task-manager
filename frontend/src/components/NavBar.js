
import { Link } from 'react-router-dom';

import TaskmanagerLogo from '../assets/TaskManagerLogo.png';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


function NavBar({ toggleTheme, isDark }) {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >

          <img src={TaskmanagerLogo} alt="Task Manager Logo" style={{ height: '40px', marginRight: '16px' }} />
          <Typography variant="h6">
            Task Manager
          </Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />
       
        <Button color="inherit" onClick={toggleTheme}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
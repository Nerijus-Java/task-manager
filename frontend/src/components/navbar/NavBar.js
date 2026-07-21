import { Link } from 'react-router-dom';
import { useContext } from 'react';


import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import TaskmanagerLogo from '../../assets/TaskManagerLogo.png';
import UserAvatar from './UserAvatar';
import { AuthContext } from '../../context/AuthContext';

function NavBar({ toggleTheme, isDark}) {

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AppBar position="static"
      color="default"
      elevation={1}>
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

        <Button color="inherit" onClick={toggleTheme} sx={{ mr: 2 }}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </Button>

          {isAuthenticated ? (
          <UserAvatar />
        ) : (
          <Button component={Link} to="/login" variant="contained" color="primary">
            Sign In
          </Button>
        )}
          
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
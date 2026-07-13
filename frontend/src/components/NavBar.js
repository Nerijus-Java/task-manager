import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TaskmanagerLogo from '../assets/TaskManagerLogo.png';


function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>

        <img src={TaskmanagerLogo} alt="Task Manager Logo" style={{ height: '40px', marginRight: '16px' }} />
 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
       

        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
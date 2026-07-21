import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function UserAvatar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        
        logout();
        setAnchorEl(null);
        navigate('/login');
    };

    return (
        <div>
            <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>U</Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: '20px' }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>Logout</MenuItem>
            </Menu>

        </div>
    );

}
export default UserAvatar;
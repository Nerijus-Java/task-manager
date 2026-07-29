import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function UserAvatar() {
    const { logout, currentUser } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const firstLetter = currentUser?.username
        ? currentUser.username.charAt(0).toUpperCase() : '?';

    const getRoleStyles = (role) => {
        if (!role) return { borderColor: 'primary.main', glow: 'transparent' };

        const normalizedRole = role.toUpperCase();

        switch (normalizedRole) {
            case 'ADMIN':
                return { borderColor: 'error.main', glow: 'rgba(244, 67, 54, 0.4)' };
            case 'MANAGER':
                return { borderColor: 'warning.main', glow: 'rgba(255, 152, 0, 0.4)' };
            case 'USER':
                return { borderColor: 'success.main', glow: 'rgba(76, 175, 80, 0.4)' };
            default:
                return { borderColor: 'primary.main', glow: 'rgba(33, 150, 243, 0.4)' };
        }
    };

    const roleStyles = getRoleStyles(currentUser?.role);

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

                <Avatar
                    sx={{
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        border: '2px solid',
                        borderColor: roleStyles.borderColor,
                        boxShadow: `0 0 10px ${roleStyles.glow}`,
                        fontWeight: 'bold'
                    }}
                >
                    {firstLetter}
                </Avatar>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: '10px' }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout} sx={{ color: 'error.main', fontWeight: 'bold' }}>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
}

export default UserAvatar;
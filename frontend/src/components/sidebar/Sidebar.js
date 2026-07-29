import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import UserAvatar from './UserAvatar';

function Sidebar() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
        { text: 'business', icon: <BusinessIcon />, path: '/business' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    ];

    return (
        <Box sx={{
            width: 260,
            flexShrink: 0,
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <List sx={{ px: 2, flexGrow: 1 }}>
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                onClick={() => navigate(item.path)}
                                sx={{
                                    borderRadius: 2,
                                    bgcolor: isActive ? 'primary.main' : 'transparent',
                                    color: isActive ? 'primary.contrastText' : 'text.secondary',
                                    '&:hover': {
                                        bgcolor: isActive ? 'primary.dark' : 'action.hover',
                                    }
                                }}
                            >
                                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{ fontWeight: isActive ? 'bold' : 'medium' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ px: 2, pb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 1.5, bgcolor: 'action.hover', borderRadius: 2 }}>
                    <UserAvatar size="medium" />
                    <Box sx={{ overflow: 'hidden', ml: 1.5 }}>
                        <Typography variant="subtitle2" fontWeight="bold" noWrap>
                            {currentUser?.username || 'User'}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" noWrap>
                            {currentUser?.email || 'user@example.com'}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;
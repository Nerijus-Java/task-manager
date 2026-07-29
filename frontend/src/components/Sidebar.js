import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import UserAvatar from './navbar/UserAvatar';

function Sidebar() {
    const { currentUser } = useContext(AuthContext);

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, active: true },
        { text: 'Organizations', icon: <BusinessIcon />, active: false },
        { text: 'Settings', icon: <SettingsIcon />, active: false },
    ];

    return (
        <Box sx={{
            width: 260,
            flexShrink: 0,
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
            height: 'calc(100vh - 65px)',
            display: 'flex',
            flexDirection: 'column',
            position: 'sticky',
            top: 0
        }}>

            <List sx={{ px: 2, flexGrow: 1 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            sx={{
                                borderRadius: 2,
                                bgcolor: item.active ? 'primary.main' : 'transparent',
                                color: item.active ? 'primary.contrastText' : 'text.secondary',
                                '&:hover': {
                                    bgcolor: item.active ? 'primary.dark' : 'action.hover',
                                }
                            }}
                        >
                            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{ fontWeight: item.active ? 'bold' : 'medium' }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ mb: 2 }} />


            <Box sx={{ px: 2, pb: 3 }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 1.5,
                    bgcolor: 'action.hover',
                    borderRadius: 2
                }}>

                    <UserAvatar />

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
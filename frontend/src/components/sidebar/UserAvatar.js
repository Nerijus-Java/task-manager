import { useContext } from 'react';
import { Avatar, Tooltip } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { getRoleStyles } from '../../utils/roleStyles';

function UserAvatar({ user: propUser, size = 'medium' }) {
    const { currentUser: contextUser } = useContext(AuthContext);
    
    const user = propUser || contextUser;

    const firstLetter = user?.username
        ? user.username.charAt(0).toUpperCase() 
        : '?';

    const roleStyles = getRoleStyles(user?.role);

    const sizeMap = {
        small: { width: 32, height: 32, fontSize: '0.875rem' },
        medium: { width: 40, height: 40, fontSize: '1rem' },
        large: { width: 56, height: 56, fontSize: '1.25rem' }
    };

    const avatarDimensions = sizeMap[size] || sizeMap.medium;

    return (
        <Tooltip title={`${user?.username || 'User'} (${user?.role || 'Member'})`}>
            <Avatar
                sx={{
                    ...avatarDimensions,
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
        </Tooltip>
    );
}

export default UserAvatar;
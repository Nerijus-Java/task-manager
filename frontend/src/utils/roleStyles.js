export const getRoleStyles = (role) => {
    if (!role) return { borderColor: 'primary.main', glow: 'transparent' };

    const normalizedRole = role.toUpperCase();

    switch (normalizedRole) {
        case 'ROLE_ADMIN':
        case 'ADMIN':
            return { borderColor: 'error.main', glow: 'rgba(244, 67, 54, 0.4)' };
        case 'ROLE_MANAGER':
        case 'MANAGER':
            return { borderColor: 'warning.main', glow: 'rgba(255, 152, 0, 0.4)' };
        case 'ROLE_BUSINESS':
        case 'BUSINESS':
            return { borderColor: 'info.main', glow: 'rgba(2, 132, 199, 0.4)' };
        case 'ROLE_WORKER':
        case 'WORKER':
            return { borderColor: 'secondary.main', glow: 'rgba(168, 85, 247, 0.4)' };
        case 'ROLE_USER':
        case 'USER':
            return { borderColor: 'success.main', glow: 'rgba(76, 175, 80, 0.4)' };
        default:
            return { borderColor: 'primary.main', glow: 'rgba(33, 150, 243, 0.4)' };
    }
};
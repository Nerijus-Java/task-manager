import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function FloatingButton({ onClick, tooltipText = "Add", icon, color = "primary.main" }) {
    return (
        <Tooltip title={tooltipText} placement="left">
            <Fab 
                onClick={onClick}
                sx={{ 
                    position: 'fixed', 
                    bottom: 40,        
                    right: 40,         
                    bgcolor: color,
                    color: 'white',
                    boxShadow: 4,
                    '&:hover': { 
                        bgcolor: color,
                        transform: 'scale(1.05)',
                    }, 
                    transition: 'transform 0.2s ease-in-out'
                }}
            >
                {icon ? icon : <AddIcon fontSize="large" />}
            </Fab>
        </Tooltip>
    );
}

export default FloatingButton;
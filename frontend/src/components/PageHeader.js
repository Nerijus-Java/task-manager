import { Box, Typography, Button } from '@mui/material';

function PageHeader({ title, buttonText, icon, onButtonClick,buttonColor }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box>
                <Typography variant="h2" fontWeight="bold" sx={{ color: 'text.primary' }}>
                    {title}
                </Typography>
            </Box>
            {buttonText && (
                <Button
                    variant="outlined"
                    color={buttonColor}
                    startIcon={icon}
                    onClick={onButtonClick}
                    sx={{ 
                        borderRadius: 2, 
                        px: 3, 
                        py: 1, 
                        fontWeight: 'bold',
                        borderWidth: 2,
                        '&:hover': { borderWidth: 2 } 
                    }}
                >
                    {buttonText}
                </Button>
            )}
        </Box>
    );
}

export default PageHeader;
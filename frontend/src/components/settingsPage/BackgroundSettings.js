import { Grid, Card, CardActionArea, Box, Typography } from '@mui/material';
import GradientIcon from '@mui/icons-material/Gradient';
import CropSquareIcon from '@mui/icons-material/CropSquare';

export default function BackgroundSettings({ backgroundStyle, onBackgroundStyleChange }) {
    const bgOptions = [
        { id: 'gradient', name: 'Smooth Gradient', desc: 'Modern diagonal gradient blending theme colors.', icon: <GradientIcon /> },
        { id: 'solid', name: 'Solid Color', desc: 'Clean, flat background color using default theme tone.', icon: <CropSquareIcon /> }
    ];

    return (
        <Grid container spacing={3}>
            {bgOptions.map((bg) => {
                const isSelected = backgroundStyle === bg.id;
                return (
                    <Grid item xs={12} sm={6} md={6} key={bg.id}>
                        <Card 
                            elevation={0}
                            sx={{ 
                                border: '2px solid', 
                                borderColor: isSelected ? 'primary.main' : 'divider',
                                borderRadius: 3,
                                bgcolor: 'background.paper',
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' }
                            }}
                        >
                            <CardActionArea onClick={() => onBackgroundStyleChange(bg.id)} sx={{ p: 3, height: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5, color: 'primary.main' }}>
                                    {bg.icon}
                                    <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                                        {bg.name}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {bg.desc}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}
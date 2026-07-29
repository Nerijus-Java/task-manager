import { Grid, Card, CardActionArea, Box, Typography } from '@mui/material';

export default function ThemeCard({ theme, isSelected, onSelect }) {
    return (
        <Grid item xs={12} sm={6} md={3}>
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
                <CardActionArea onClick={onSelect} sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                        <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: theme.color }} />
                        <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                            {theme.name}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {theme.desc}
                    </Typography>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
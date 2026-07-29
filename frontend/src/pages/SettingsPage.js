import { Container, Box, Typography, Grid } from '@mui/material';
import Sidebar from '../components/sidebar/Sidebar';
import ThemeCard from '../components/settingsPage/ThemeCard';
import { THEME_OPTIONS } from '../constants/themeOptions';

export default function SettingsPage({ currentFlavor, onFlavorChange }) {
    return (
        <Box sx={{ display: 'flex', height: 'calc(100vh - 65px)', overflow: 'hidden', bgcolor: 'background.default' }}>
            <Sidebar />
            
            <Box component="main" sx={{ flexGrow: 1, height: '100%', overflowY: 'auto', p: 4 }}>
                <Container maxWidth="lg">
                    
                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: 'text.primary' }}>
                        Settings
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                        Manage your application theme. Use the sun/moon icon in the top navbar to toggle light and dark mode at any time.
                    </Typography>

                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'text.primary' }}>
                        Color Themes
                    </Typography>

                    <Grid container spacing={3}>
                        {THEME_OPTIONS.map((t) => (
                            <ThemeCard 
                                key={t.id}
                                theme={t}
                                isSelected={currentFlavor === t.id}
                                onSelect={() => onFlavorChange(t.id)}
                            />
                        ))}
                    </Grid>

                </Container>
            </Box>
        </Box>
    );
}
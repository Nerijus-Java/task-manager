import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from '../components/sidebar/Sidebar';
import BackgroundSettings from '../components/settingsPage/BackgroundSettings';
import ThemeSettings from '../components/settingsPage/ThemeSettings';

export default function SettingsPage({ currentFlavor, onFlavorChange, backgroundStyle, onBackgroundStyleChange }) {
    return (
        <Box sx={{ display: 'flex', height: 'calc(100vh - 65px)', overflow: 'hidden' }}>
            <Sidebar />

            <Box component="main" sx={{ flexGrow: 1, height: '100%', overflowY: 'auto', p: 4 }}>
                <Container maxWidth="lg">

                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: 'text.primary' }}>
                        Settings
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                        Customize your application workspace appearance, preferences, and features.
                    </Typography>
                    <Accordion
                        defaultExpanded
                        elevation={0}
                        sx={{
                            mb: 2,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: '12px !important',
                            bgcolor: 'background.paper',
                            '&:before': { display: 'none' },
                            overflow: 'hidden'
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" fontWeight="bold" color="text.primary">
                                Background Style
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
                            <BackgroundSettings
                                backgroundStyle={backgroundStyle}
                                onBackgroundStyleChange={onBackgroundStyleChange}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        elevation={0}
                        sx={{
                            mb: 2,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: '12px !important',
                            bgcolor: 'background.paper',
                            '&:before': { display: 'none' },
                            overflow: 'hidden'
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" fontWeight="bold" color="text.primary">
                                Color Themes
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
                            <ThemeSettings
                                currentFlavor={currentFlavor}
                                onFlavorChange={onFlavorChange}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>
        </Box>
    );
}
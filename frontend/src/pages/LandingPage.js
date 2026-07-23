import { Box, Button, Typography, Container, Stack, Grid } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import FeatureCard from '../components/landingpage/FeatureCard'

import { Link } from 'react-router-dom';
import { BarChart } from '@mui/icons-material';

function LandingPage() {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    mt: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >

                <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                    Organize your day, <br />
                    <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        master your time.
                    </Box>
                </Typography>

                <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 5, maxWidth: '600px' }}>
                    The simplest way to manage your tasks, boost your productivity, and get things done.
                    Join today to take control of your workflow.
                </Typography>

                <Stack direction="row" spacing={3}>


                    <Button
                        component={Link}
                        to="/register"
                        variant="contained"
                        size="large"
                        sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 2 }}
                    >
                        Get Started
                    </Button>

                    <Button
                        component={Link}
                        to="/login"
                        variant="outlined"
                        size="large"
                        sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 2 }}
                    >
                        Sign In
                    </Button>
                </Stack>
            </Box>

            <Grid container spacing={2} sx={{ mt: 8, mb: 4 }} >
                <Grid size={3}>
                    <FeatureCard icon={<DarkModeOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />}
                        title="Dark Mode"
                        description="Enjoy a sleek and modern interface with our dark mode feature, perfect for working in low-light environments." />
                </Grid>

                <Grid size={3}>
                    <FeatureCard icon={<CheckCircleOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />}
                        title="Task Management"
                        description="Easily create, organize, and track your tasks to stay on top of your work." />
                </Grid>

                <Grid size={3}>
                    <FeatureCard icon={<SecurityOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />}
                        title="Security"
                        description="Your data is safe with us. We prioritize your privacy and security." />
                </Grid>

                <Grid size={3}>
                    <FeatureCard icon={<BarChart sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />}
                        title="Analytics"
                        description="Visualize your productivity with comprehensive charts and metric tracking to optimize your daily workflow." />
                </Grid>
            </Grid>

        </Container>
    );

}

export default LandingPage;
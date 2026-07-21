import { useContext } from 'react';
import { Box, Button, Typography, Container, Stack, Grid, CardContent, Card } from '@mui/material';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function HomePage() {

  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return (
      // ///////////////////////
      // LOGGED IN 
      // ///////////////////////
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

          {/* Main heading with a highlighted part */}

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
        </Box>

        {/* Features section with cards for Dark Mode, Task Management, and Security */}

        <Grid container spacing={2} sx={{ mt: 8, mb: 4 }} >
          <Grid size={4}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
                <DarkModeOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Dark Mode
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Enjoy a sleek and modern interface with our dark mode feature, perfect for working in low-light environments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={4}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
                <CheckCircleOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Task Management
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Easily create, organize, and track your tasks to stay on top of your work.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={4}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
                <SecurityOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Security
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Your data is safe with us. We prioritize your privacy and security.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Container>
    );
  } else {
    return (

      // ///////////////////////
      // LOGGED OUT
      // ///////////////////////

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

          {/* Main heading with a highlighted part */}

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

            {/* Login and Register buttons with routing to respective pages */}

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

        {/* Features section with cards for Dark Mode, Task Management, and Security */}

        <Grid container spacing={2} sx={{ mt: 8, mb: 4 }} >
          <Grid size={4}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
                <DarkModeOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Dark Mode
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Enjoy a sleek and modern interface with our dark mode feature, perfect for working in low-light environments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={4}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
                <CheckCircleOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Task Management
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Easily create, organize, and track your tasks to stay on top of your work.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={4}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
                <SecurityOutlinedIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Security
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Your data is safe with us. We prioritize your privacy and security.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Container>
    );
  }
}

export default HomePage;
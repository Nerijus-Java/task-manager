import { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/ApiService';
import CustomAlert from '../components/CustomAlert';

function RegistrationPage() {
  const navigate = useNavigate();

  //FORM
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //ALERT 
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const showNotification = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showNotification("Passwords do not match!", "error");
      return;
    }

    const newUser = {
      username,
      email,
      dateOfBirth,
      password
    };

    try {
      const response = await registerUser(newUser)
      showNotification(response.data, "success");
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data) {
        showNotification(error.response.data, "error");
      } else {
        showNotification("Server is offline or unreachable.", "error");
      }
    }
  };



  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}>
          <Typography component="h1" variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
            Register
          </Typography>
          <Box component="form" onSubmit={handleRegistration}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Date of Birth"
              type={dateOfBirth ? 'date' : 'text'}
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => {
                if (!dateOfBirth) e.target.type = 'text';
              }}

              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 4, mb: 2, py: 1.5 }}
            >
              Register
            </Button>

            <Typography align="center" variant="body2" color="text.secondary">
              Already have an account?{' '}
              <Link to="/login" style={{ color: 'inherit', fontWeight: 'bold' }}>
                Sign in here
              </Link>
            </Typography>

          </Box>
        </Paper>
      </Box>
      <CustomAlert open={openSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar} />
    </Container>
  );
}

export default RegistrationPage;
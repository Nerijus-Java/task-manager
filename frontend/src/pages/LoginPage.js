import { useState, useContext } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/ApiService';
import CustomAlert from '../components/CustomAlert';
import { AuthContext } from '../context/AuthContext';

function LoginPage() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

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

    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = {
            usernameOrEmail,
            password
        };

        try {
            const response = await loginUser(credentials);
            
            const jwtToken = response.data.token;
            const userObject = response.data.user;

            login(jwtToken, userObject);

            showNotification("Login successful!", "success");

            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (error) {
            showNotification("Invalid username or password.", "error");
            console.error("Login Error:", error);
        }

    };

    return (

        <Container maxWidth="xs">
            <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}>

                    <Typography component="h1" variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Login
                    </Typography>

                    <Box component="form" onSubmit={handleLogin}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username or Email"
                            type="text"
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                            autoFocus
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
                        <Button
                            type="submit"
                            variant="contained" size="large"
                            fullWidth
                            sx={{ mt: 4, mb: 2, py: 1.5 }}
                        >
                            Login
                        </Button>
                        <Typography align="center" variant="body2" color="text.secondary">
                            Don't have an account?{' '}
                            <Link to="/register" style={{ color: 'inherit', fontWeight: 'bold' }}>
                                Register here
                            </Link>
                        </Typography>

                    </Box>
                </Paper>
            </Box>
            <CustomAlert
                open={openSnackbar}
                message={snackbarMessage}
                severity={snackbarSeverity}
                onClose={handleCloseSnackbar}
            />
        </Container>
    );
}

export default LoginPage;
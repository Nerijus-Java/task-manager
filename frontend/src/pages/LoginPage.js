import { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginPage() {

    const [usernameOrEmail, setusernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Sending to backend:", { usernameOrEmail, password });
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
                            label="usernameOrEmail"
                            type="text"
                            value={usernameOrEmail}
                            onChange={(e) => setusernameOrEmail(e.target.value)}
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
                            variant="outlined" size="large"
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
        </Container>
    );
}

export default LoginPage;
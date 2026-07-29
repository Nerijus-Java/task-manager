import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginUser, registerUser } from '../services/ApiService';
import { useSnackbar } from 'notistack';


export const useAuth = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();

    const executeLogin = async (credentials) => {
        try {
            const response = await loginUser(credentials);
            const jwtToken = response.data.token;
            const userObject = response.data.user;
            const successMessage = response.data.message || "Login successful!";

            login(jwtToken, userObject);
            enqueueSnackbar(successMessage, { variant: 'success' });

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            const backendError = error.response?.data?.message || error.response?.data || "Invalid credentials or server error.";

            enqueueSnackbar(backendError, { variant: 'error' });
            console.error("Login Error:", error);
        }
    };

    const executeRegistration = async (newUser, confirmPassword) => {
        if (newUser.password !== confirmPassword) {
            enqueueSnackbar("Passwords do not match!", { variant: 'error' });
            return;
        }

        try {
            const response = await registerUser(newUser);
            const successMessage = response.data?.message || response.data || "Registration successful!";

            enqueueSnackbar(successMessage, { variant: 'success' });
            navigate('/login');
        } catch (error) {
            const backendError = error.response?.data?.message || error.response?.data || "Server is offline or unreachable.";
            enqueueSnackbar(backendError, { variant: 'error' });
        }
    };

    return { executeLogin, executeRegistration };
};
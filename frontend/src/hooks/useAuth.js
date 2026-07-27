import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginUser, registerUser } from '../services/ApiService';
import { useAlert } from './useAlert';

export const useAuth = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { alertProps, triggerAlert } = useAlert();

    const executeLogin = async (credentials) => {
        try {
            const response = await loginUser(credentials);
            const jwtToken = response.data.token;
            const userObject = response.data.user;
            const successMessage = response.data.message || "Login successful!";

            login(jwtToken, userObject);
            triggerAlert(successMessage, "success");

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            const backendError = error.response?.data?.message || error.response?.data || "Invalid credentials or server error.";

            triggerAlert(backendError, "error");
            console.error("Login Error:", error);
        }
    };

    const executeRegistration = async (newUser, confirmPassword) => {
        if (newUser.password !== confirmPassword) {
            triggerAlert("Passwords do not match!", "error");
            return;
        }

        try {
            const response = await registerUser(newUser);
            const successMessage = response.data?.message || response.data || "Registration successful!";

            triggerAlert(successMessage, "success");
            navigate('/login');
        } catch (error) {
            const backendError = error.response?.data?.message || error.response?.data || "Server is offline or unreachable.";

            triggerAlert(backendError, "error");
        }
    };

    return { executeLogin, executeRegistration, alertProps };
};
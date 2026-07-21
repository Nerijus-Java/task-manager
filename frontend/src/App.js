import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/navbar/NavBar';

import Registration from './pages/RegistrationPage';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';

import GradientBackground from './components/GradientBackground';
import { darkTheme, lightTheme } from './theme';
import { AuthProvider } from './context/AuthContext';

function App() {

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <AuthProvider>
        <BrowserRouter>
          <CssBaseline />
          <GradientBackground isDark={isDark}>
            <NavBar 
              toggleTheme={toggleTheme}
              isDark={isDark}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </GradientBackground>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

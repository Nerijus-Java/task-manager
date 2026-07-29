import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';

import NavBar from './components/navbar/NavBar';
import Registration from './pages/RegistrationPage';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';

import GradientBackground from './components/GradientBackground';
import { themes } from './theme'; 
import { AuthProvider } from './context/AuthContext';

function App() {

  const [flavor, setFlavor] = useState('default');
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const currentThemeObject = themes[flavor][mode];
  const isDark = mode === 'dark';

  return (
    <ThemeProvider theme={currentThemeObject}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <AuthProvider>
          <BrowserRouter>
            <CssBaseline />
            <GradientBackground isDark={isDark}>
              <NavBar toggleTheme={toggleTheme} isDark={isDark} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/settings" 
                  element={<SettingsPage currentFlavor={flavor} onFlavorChange={setFlavor} />} 
                />
              </Routes>
            </GradientBackground>
          </BrowserRouter>
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/NavBar';

import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';

import { darkTheme, lightTheme } from './theme';



function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };


  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <CssBaseline />
        <NavBar toggleTheme={toggleTheme} isDark={isDark} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

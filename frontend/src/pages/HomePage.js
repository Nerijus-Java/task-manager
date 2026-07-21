import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import DashboardPage from './DashboardPage';
import LandingPage from './LandingPage';

function HomePage() {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <DashboardPage /> : <LandingPage />;
}
export default HomePage;
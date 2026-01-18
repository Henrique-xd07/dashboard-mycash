import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './constants';
import Dashboard from './pages/Dashboard';
import Cards from './pages/Cards';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.CARDS} element={<Cards />} />
        <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

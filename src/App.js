import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Auth from './pages/auth/Auth';
import Profile from './pages/profile/Profile';
import Journal from './pages/journal/Journal';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Auth />} />
        <Route path='profile' element={<Profile />} />
        <Route path='journal' element={<Journal />} />
      </Route>
    </Routes>
  );
}

export default App;

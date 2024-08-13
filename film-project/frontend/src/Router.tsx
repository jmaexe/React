import { createBrowserRouter } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import Home from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import LogoutPage from './pages/LogoutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/characters',
        element: <CharactersPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      { path: '/login', element: <LoginPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

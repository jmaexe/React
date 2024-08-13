import React from 'react';
import Navbar from './components/Navbar';
import CharactersPage from './pages/CharactersPage';
import LoginPage from './pages/LoginPage';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

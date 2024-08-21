import React from 'react';
import Navbar from './components/Navbar';
import CharactersPage from './pages/CharactersPage';
import LoginPage from './pages/LoginPage';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import ModalContent from './components/ModalContent';
import { Character } from './models/Character';
import ModalLayout from './components/ModalLayout';
const App = () => {
  return <CharactersPage />;
  // return <RouterProvider router={router} />;
};
export default App;

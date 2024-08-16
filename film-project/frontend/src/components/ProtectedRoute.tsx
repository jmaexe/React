import { Navigate } from 'react-router-dom';
import { useUserContext } from '../hooks/hooks';
import { ReactNode } from 'react';
type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUserContext();
  const isAuthenticated = user !== undefined;
  return isAuthenticated ? children : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;

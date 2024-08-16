import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../components/models/User';

export type UserContextType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type UserContextProps = {
  children: ReactNode;
};

export default function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User | undefined>(undefined);
  // {
  //   username: 'John',
  //   password: '123456789',
  // }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UserContext is not provided');
  }
  return context;
};

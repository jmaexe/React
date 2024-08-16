import { useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";

export const useDebounce = <T>(value: T, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('UserContext is not provided');
    }
    return context;
  };



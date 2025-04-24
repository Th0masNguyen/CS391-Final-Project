"use client";
import {createContext, useState, ReactNode, useEffect} from "react";

// user context with username and function to set it
export const UserContext = createContext<{
    username: string;
    setUsername: (name: string) => void;
}>({
    username: "",
    setUsername: () => {},
});

// context providing component to wrap around the app for username access
export default function UserProvider({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState("");

    // on mount, get the username from local storage if it's there
    useEffect(() => {
        const stored = localStorage.getItem('username');
        if (stored) {
            setUsername(stored);
        }
    }, []);

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
}
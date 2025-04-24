"use client";
import { createContext, useState, ReactNode } from "react";

const UserContext = createContext<{
    username: string;
    setUsername: (name: string) => void;
}>({
    username: "",
    setUsername: () => {},
});

export default function UserProvider({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState("");

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
}
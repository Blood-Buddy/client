import { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    const data = await SecureStore.isAvailableAsync();
    return result
}

export const LoginContext = createContext(null);

export function AuthComponent({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const [role, setRole] = useState("");

    // console.log(isLoggedIn, role, "<<<from login context");

    useEffect(() => {
        getValueFor('accessToken').then((data) => {
            setIsLoggedIn(data);
        });
        getValueFor('role').then((data) => {
            setRole(data);
        })
    }, [isLoggedIn]);

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, role, setRole }}>
            {children}
        </LoginContext.Provider>
    )
}


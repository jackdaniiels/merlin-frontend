import React, { PropsWithChildren, useState } from 'react';
import { createContext } from 'react';

interface User {
    name: string;
    lastname: string;
    age: number;
}

interface UserContextProps {
    isAuthenticated: boolean;
    user: User | null;
    handleLogin: () => void;
    handleLogout: () => void;
}


export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {

    const [user, setUser] = useState<User>({
        name: '',
        lastname: '',
        age: 0
    } as User);
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const handleLogout = () => {
        console.log('logout');
        setAuthenticated(false);
        setUser({
            name: "",
            lastname: "",
            age: 0
        });
    }

    const handleLogin = () => {
        console.log('login');
        setAuthenticated(true);
        setUser({
            name: "Felipe",
            lastname: "m",
            age: 30
        });
    }

    return (
        <UserContext.Provider value={{
            isAuthenticated: authenticated,
            user: user,
            handleLogout: handleLogout,
            handleLogin: handleLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}


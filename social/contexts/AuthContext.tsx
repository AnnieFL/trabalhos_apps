import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type User = {
    id: number,
    name: string,
    email: string,
    jwt: string
}

type AuthContextType = {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                try {
                    const decodedUser:User = jwtDecode(token);
                    
                    if (decodedUser) {
                        setUser(decodedUser)
                    }
                } catch(e) {
                    console.error(e)
                }
            }
        } catch (e) {
            console.log('Erro ao recuperar token', e);
        }
        })();
    }, []);

    const login = (user: User) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

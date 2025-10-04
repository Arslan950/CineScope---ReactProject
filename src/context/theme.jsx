import React from 'react';
import { createContext, useState, useEffect, useContext } from 'react';


const ThemeContext = createContext({
    theme: 'dark',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {

        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark'; 
    });

    const darkTheme = () => {
        setTheme('dark');
    };

    const lightTheme = () => {
        setTheme('light');
    };


    useEffect(() => {

        document.querySelector('html').classList.remove('dark', 'light');
        document.querySelector('html').classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    const value = { theme, darkTheme, lightTheme };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
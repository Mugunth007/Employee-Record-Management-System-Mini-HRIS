
import { useState, useEffect } from 'react';

export const useDarkMode = (): [boolean, () => void] => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            return savedMode ? JSON.parse(savedMode) : false;
        }
        return false;
    });

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode: boolean) => !prevMode);
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return [isDarkMode, toggleDarkMode];
};

import { useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { THEME_LIGHT, THEME_DARK, THEME_KEY } from '../constants';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => JSON.parse(window.localStorage.getItem(THEME_KEY)) ?? null,
  );

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
    );
    document.documentElement.setAttribute('data-theme', theme);
  };

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, JSON.stringify(theme));
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


import { useTheme } from '../../contexts/ThemeContext/ThemeContext';
import css from "./Header.module.css"


export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <p className={css.header__text}>Навігація сайту</p>
      <button type="button" onClick={toggleTheme}>
        Light
      </button>
      <button type="button" onClick={toggleTheme}>
        dark
      </button>
      {theme}
      <button type="button">UA</button>
      <button type="button">ENG</button>
    </header>
  );
};

import { headerNavigation } from "@/helpers/mainNavigation";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.mainNavigation}>
      {headerNavigation.map(({ href, text }) => (
        <NavLink to={href} key={text} className={css.navigationLink}>
          {text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;

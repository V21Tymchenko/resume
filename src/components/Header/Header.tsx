import Navigation from "../Navigation";
import { IoIosMore } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { useToggleOpen } from "@/helpers/hooks";
import css from "./Header.module.css";

const Header = () => {
  const { isOpen, toggle } = useToggleOpen(false);

  return (
    <header className={css.header}>
      <button type="button" onClick={toggle} className={css.navigationIcon}>
        <IoIosMore className={`${isOpen ? css.rotated : ""}`} />
        <span>Навігація сайтом</span>
      </button>
      <div className={css.languageContainer}>
        <button type="button">UK</button>
        <button type="button">EN</button>
      </div>
      <a
        href="tg://resolve?domain=@valerytymchenko"
        target="_blank"
        className={css.navigationIcon}
      >
        <span> Valeriia Tymchenko</span>
        <LiaTelegramPlane />
      </a>
      {isOpen && <Navigation />}
    </header>
  );
};
export default Header;

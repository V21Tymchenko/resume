import Navigation from "../Navigation";
import { IoIosMore } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { useToggleOpen } from "@/helpers/hooks";
import css from "./Header.module.css";

const Header = () => {
  const { isOpen, toggle } = useToggleOpen(false);

  return (
    <header className={css.header}>
      <button type="button" onClick={toggle} className={css.headerIcon}>
        <IoIosMore className={`${isOpen ? css.rotated : ""}`} />
        <span>Навігація сайтом</span>
      </button>
      <div className={css.language}>
        <button type="button" className={css.languageButton}>
          UK
        </button>
        <button type="button" className={css.languageButton}>
          EN
        </button>
      </div>
      <a
        href="tg://resolve?domain=@valerytymchenko"
        target="_blank"
        rel="noopener noreferrer"
        className={css.headerLink}
      >
        <span> Valeriia Tymchenko</span>
        <LiaTelegramPlane />
      </a>
      {isOpen && <Navigation />}
    </header>
  );
};
export default Header;

import { Outlet } from "react-router-dom";
import Header from "../Header";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;

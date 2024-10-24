// import styles from "./AppLayout.module.scss";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

AppLayout.displayName = "AppLayout";

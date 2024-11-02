import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

AppLayout.displayName = "AppLayout";

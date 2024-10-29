import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <div className={styles.header}>
        <div>Викторина "Песни птиц"</div>
        <div>Игра</div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.footer}>2</div>
    </div>
  );
};

AppLayout.displayName = "AppLayout";

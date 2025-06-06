import {Footer, Header} from "@/components/layouts";
import {Outlet} from "react-router";
import styles from './styles.module.scss';

const Layout = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Header/>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
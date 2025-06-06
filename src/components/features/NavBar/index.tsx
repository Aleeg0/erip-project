import {useEffect, useState} from "react";
import {routeMap} from "@/shared/router";
import NavList from "./ui/NavList.tsx";
import NavDropdown from "./ui/NavDropdown.tsx";
import styles from './styles.module.scss';

const routesItems = Object.values(routeMap);

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth < 640);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <nav className={styles.NavBar_root}>
      {!isMobile ?
        <NavList
          routes={routesItems}
        />
        :
        <NavDropdown
          routes={routesItems}
        />
      }
    </nav>
  );
};

export default NavBar;
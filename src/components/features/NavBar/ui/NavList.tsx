import {NavLink, useLocation} from "react-router";
import type {FC} from "react";
import styles from './styles.module.scss';
import {cn} from "@/shared/utils";
import type {NavProps} from "../lib/type.ts";


const NavList: FC<NavProps> = ({routes}) => {
  const pathname = useLocation().pathname;

  return (
    <ul className={styles.NavList_list}>
      {routes.map(({path, title}, i) => (
        <li
          key={i}
          className={styles.NavList_listItem}
        >
          <NavLink
            to={path}
            className={cn(
              styles.NavList_link,
              pathname === path && styles.NavList_linkActive
            )}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
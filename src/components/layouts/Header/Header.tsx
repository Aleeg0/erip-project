import styles from './styles.module.scss';
import {AppIcon} from "@/components/icons";
import {cn} from "@/shared/utils";
import {useScrollTrigger} from "@/shared/hooks";
import {NavLink} from "react-router";
import {NavBar} from "@/components/features";

const Header = () => {
  const isScrolled = useScrollTrigger();

  return (
    <header className={cn(
      styles.root,
      isScrolled && styles.rootFlying
    )}>
      <div className={styles.container}>
        <div className={styles.content}>
          <NavLink to={"/"} className={styles.leftPart}>
            <AppIcon />
          </NavLink>
          <div className={styles.rightPart}>
            <NavBar/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
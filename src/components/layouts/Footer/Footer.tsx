import styles from './styles.module.scss';
import {year} from "@/shared/const.ts";
import {socials} from "@/components/layouts/Footer/const.tsx";
import {UAParser} from "ua-parser-js";


const Footer = () => {
  const {browser} = UAParser();


  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftPart}>
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className={styles.rightPart}>
          <span>
            {year}, ОАО «НКФО «ЕРИП»
          </span>
          <span>Текущий браузр: {browser.name} {browser.version}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
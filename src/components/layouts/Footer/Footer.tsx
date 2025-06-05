import styles from './styles.module.scss';
import {year} from "@/shared/const.ts";
import {socials} from "@/components/layouts/Footer/const.tsx";


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
          <p>
            {year}, ОАО «НКФО «ЕРИП»
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
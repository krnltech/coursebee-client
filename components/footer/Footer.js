import styles from "../../styles/Home.module.css";
import Image from 'next/image';

const Footer = () => {
  return (  
    <>
      <footer className={styles.footer}>
          Powered by
          <Image src="/CB logo.png" alt="Vercel Logo" width={158} height={64} className={styles.logo} />
      </footer>
    </>
  );
};
 
export default Footer;

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { useRef } from "react";

export const Footer = () => {
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/img/logo-2.png"
            alt="island"
            className={styles.logoImg}
            width={1612}
            height={213}
          />
        </div>
        <div className={styles.slogan}>
          <p>
            <b>
              La mezcla la decide cada cliente, nosotros garantizamos un gran
              Long Island.
            </b>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.puesto}>
          <p>
            <b>Andrea Barba</b>
          </p>
          <p>Co- Founder</p>
          <p>VP Planner</p>
          <p>andrea@longisland.mx </p>
          <p>55-3034-8016</p>
        </div>
        <div className={styles.puesto}>
          <p>
            <b>Ignacio Tatto</b>
          </p>
          <p> Co-Founder</p>
          <p>VP Creativo</p>
          <p>tatto@longisland.mx</p>
          <p>55-4340-1299</p>
        </div>
      </div>
    </footer>
  );
};

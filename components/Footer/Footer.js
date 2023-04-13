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
          <p>
            <a
              href="mailto:andrea@longisland.mx"
              target="_blank"
              rel="noreferrer"
            >
              andrea@longisland.mx
            </a>
          </p>

          <a href="https://wa.me/525530348016" target="_blank" rel="noreferrer">
            55-3034-8016
          </a>
        </div>
        <div className={styles.puesto}>
          <p>
            <b>Ignacio Tatto</b>
          </p>
          <p> Co-Founder</p>
          <p>VP Creativo</p>
          <p>
            <a
              href="mailto:tatto@longisland.mx"
              target="_blank"
              rel="noreferrer"
            >
              tatto@longisland.mx
            </a>
          </p>

          <a href="https://wa.me/525543401299" target="_blank" rel="noreferrer">
            55-4340-1299
          </a>
        </div>
      </div>
    </footer>
  );
};

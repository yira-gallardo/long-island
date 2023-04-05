import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { useRef } from "react";

export const Nav = () => {
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.navDesktop}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src="/img/logo_2.png"
                alt="island"
                className={styles.logoImg}
                width={1612}
                height={213}
              />
            </div>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.link} onClick={() => goToSection("header")}>
            NOSOTROS
          </div>
          <div className={styles.link} onClick={() => goToSection("servicios")}>
            SERVICIOS
          </div>
          <div className={styles.link} onClick={() => goToSection("home")}>
            NUESTRO CAMINO
          </div>
          <div className={styles.link} onClick={() => goToSection("contacto")}>
            CONTÁCTANOS
          </div>
        </div>
      </div>
    </nav>
  );
};

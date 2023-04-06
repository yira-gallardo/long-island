import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { useEffect, useState } from "react";

export const Nav = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRoute(window.location.pathname);
    }
  }, []);

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  if (route === "/") {
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
            <div
              className={styles.link}
              onClick={() => goToSection("servicios")}
            >
              SERVICIOS
            </div>
            <div className={styles.link} onClick={() => goToSection("home")}>
              NUESTRO CAMINO
            </div>
            <div
              className={styles.link}
              onClick={() => goToSection("contacto")}
            >
              CONTÁCTANOS
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
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
            <Link href="/#header" className={styles.link}>
              NOSOTROS
            </Link>
            <Link href="/#servicios" className={styles.link}>
              SERVICIOS
            </Link>
            <Link href="/#home" className={styles.link}>
              NUESTRO CAMINO
            </Link>
            <Link href="/#contacto" className={styles.link}>
              CONTÁCTANOS
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

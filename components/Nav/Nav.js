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
                  src="/img/logo-2.png"
                  alt="island"
                  className={styles.logoImg}
                  width={1612}
                  height={213}
                />
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <Link href="/" className={styles.link}>
              Inicio
            </Link>
            <div className={styles.link} onClick={() => goToSection("header")}>
              Nosotros
            </div>
            <div
              className={styles.link}
              onClick={() => goToSection("servicios")}
            >
              Servicios
            </div>
            <div className={styles.link} onClick={() => goToSection("home")}>
              Nuestro Camino
            </div>
            <div
              className={styles.link}
              onClick={() => goToSection("contacto")}
            >
              Contáctanos
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
                  src="/img/logo-2.png"
                  alt="island"
                  className={styles.logoImg}
                  width={1612}
                  height={213}
                />
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <Link href="/" className={styles.link}>
              Inicio
            </Link>
            <Link href="/#header" className={styles.link}>
              Nosotros
            </Link>
            <Link href="/#servicios" className={styles.link}>
              Servicios
            </Link>
            <Link href="/#home" className={styles.link}>
              Nuestro Camino
            </Link>
            <Link href="/#contacto" className={styles.link}>
              Contáctanos
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

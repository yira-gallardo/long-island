import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Nav = () => {
  const [route, setRoute] = useState();
  const [menuActive, setMenuActive] = useState(false); // Para activar menu mobile

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRoute(window.location.pathname);
    }
  }, []);

  const goToSection = (id) => {
    document.getElementById(id)({ behavior: "smooth" });
  };

  if (route === "/") {
    return (
      <>
        {" "}
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
              <div
                className={styles.link}
                onClick={() => goToSection("header")}
              >
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
        {!menuActive && (
          <nav className={styles.navMobile}>
            <div className={styles.left}>
              <Link href="/">
                <div className={styles.logo}>
                  <Image
                    src="/img/logo-1.png"
                    alt="island"
                    className={styles.logoImg}
                    width={1612}
                    height={213}
                  />
                </div>
              </Link>
            </div>
            <div className={styles.right}>
              <div
                className={styles.burger}
                onClick={() => setMenuActive(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
            </div>
          </nav>
        )}
        {menuActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className={styles.menuMobile}>
              <div
                className={styles.close}
                onClick={() => setMenuActive(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <Link href="/">
                <div className={styles.logo}>
                  <Image
                    src="/img/logo-1.png"
                    alt="island"
                    className={styles.logoImg}
                    width={1612}
                    height={213}
                  />
                </div>
              </Link>
              <div className={styles.link} onClick={() => goToSection("/")}>
                Inicio
              </div>
              <div
                className={styles.link}
                onClick={() => goToSection("header")}
              >
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
          </motion.div>
        )}
        <div className={styles.whatsApp}>
          <a href="https://wa.me/525530348016" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
        </div>
      </>
    );
  } else {
    return (
      <>
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
        <div className={styles.whatsApp}>
          <a href="https://wa.me/525543401299" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
        </div>
      </>
    );
  }
};

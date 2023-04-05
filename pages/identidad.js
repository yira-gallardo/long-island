import Head from "next/head";
import styles from "@/styles/Identidad.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Identidad() {
  return (
    <>
      <Head>
        <title>Long Island - Identidad</title>
        <meta name="description" content="Long Island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
              <div
                className={styles.link}
                onClick={() => goToSection("header")}
              >
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
        <div className={styles.identidad}>
          <div className="container">
            <div className={styles.title}>
              <h2>Identidad de marca</h2>
            </div>
            <div className={styles.subtitle}>
              Transmitimos la personalidad y esencia que hace única a tu marca.
            </div>
            <div className={styles.text}>
              <p>- Logo</p>
              <p>- Branding</p>
              <p>- Estrategia e identidad de marca</p>
              <p>- Brandbooka</p>
              <p>- Imagen corporativa</p>
              <p>- Empaques</p>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src="/img/logo_2.png"
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
                Long Island
              </b>
            </p>
          </div>
          <div
            className={styles.contacto}
            onClick={() => goToSection("contacto")}
          >
            Contáctanos
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.puesto}>
            <p>Andrea Barba</p>
            <p>Co- Founder</p>
            <p>VP Planner</p>
            <p>andrea@longisland.mx </p>
            <p>5530348016</p>
          </div>
          <div className={styles.puesto}>
            <p> Ignacio Tatto</p>
            <p> Co-Founder</p>
            <p>VP Creativo</p>
            <p>tatto@longisland.mx</p>
            <p>5543401299</p>
          </div>
        </div>
      </footer>
    </>
  );
}

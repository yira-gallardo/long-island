import Head from "next/head";
import styles from "@/styles/Creatividad.module.css";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/Nav/Nav";
import { motion } from "framer-motion";

export default function Creatividad() {
  return (
    <>
      <Head>
        <title>Long Island - Creatividad</title>
        <meta name="description" content="Long Island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.creatividad}>
            <div className="container">
              <div className={styles.title}>
                <h2>Creatividad</h2>
              </div>
              <div className={styles.subtitle}>
                Partimos de los objetivos de nuestros clientes, creando
                estrategias personalizadas, inyectando creatividad para generar
                campañas de impacto que conecten con sus audiencias.
              </div>
              <div className={styles.text}>
                <p>- Campañas creativas</p>
                <p>- Master Graphics</p>
                <p>- Materiales POP, digitales e impresos</p>
                <p>- Estrategias y creatividad en punto de venta</p>
              </div>
            </div>
          </div>
        </motion.div>
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

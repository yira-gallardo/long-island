import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
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
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.content}>
            <div className={styles.left} style={{ height: "600px;" }}>
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
            <div className={styles.right}>
              <div className={styles.video}>
                <video autoPlay muted>
                  <source src="/img/header.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

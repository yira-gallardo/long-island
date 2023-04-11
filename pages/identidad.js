import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import Image from "next/image";
import { Nav } from "@/components/Nav/Nav";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";

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
                <h2>Identidad de marca</h2>
              </div>
              <div className={styles.subtitle}>
                Transmitimos la personalidad y esencia que hace única a tu
                marca.
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
            <div className={styles.right}>
              <div className={styles.video}>
                <video autoPlay muted>
                  <source src="/img/identidad.mp4" type="video/mp4" />
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

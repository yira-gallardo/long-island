import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MyCarousel } from "@/components/MyCarousel/MyCarousel";
import Image from "next/image";

export default function Eventos() {
  return (
    <>
      <Head>
        <title>Long Island - Eventos</title>
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
            <div className={styles.left} style={{ minHeight: "500px" }}>
              <div className={styles.title}>
                <h2>Eventos</h2>
                <div className={styles.divider}>
                  <div className={styles.line} />
                  <div className={styles.line} />
                  <div className={styles.line} />
                  <div className={styles.line} />
                  <div className={styles.line} />
                </div>
              </div>
              <div className={styles.text}>
                <p>
                  Desde un stand hasta un evento en diferentes ciudades.
                  Nosotros te apoyamos con el concepto, logística y montaje.
                </p>
                <p>
                  <ul>
                    <li>Stands</li>
                    <li>Realización y logística de eventos</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.video}>
                <video autoPlay muted>
                  <source src="/img/eventos.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <MyCarousel />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { MyCarousel } from "@/components/MyCarousel/MyCarousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            <div className={styles.left} style={{ minHeight: "500px" }}>
              <div className={styles.title}>
                <h2>Identidad de marca</h2>
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
                  Transmitimos la personalidad y esencia que hace única a tu
                  marca.
                </p>
                <p>
                  <ul>
                    <li>Logo</li>
                    <li>Branding</li>
                    <li>Estrategia e identidad de marca</li>
                    <li> Brandbooka</li>
                    <li>Imagen corporativa</li>
                    <li>Empaques</li>
                  </ul>
                </p>
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
          <MyCarousel />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

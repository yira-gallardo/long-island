import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function Paginas() {
  return (
    <>
      <Head>
        <title>Long Island - Páginas</title>
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
            <div className="container">
              <div className={styles.title}>
                <h2>Páginas web</h2>
              </div>
              <div className={styles.subtitle}>
                Desarrollamos páginas web orientadas al user experience y buenas
                prácticas de programación. Nuestros dos ingredientes: Diseño
                atractivo + funcionalidad.
              </div>
              <div className={styles.text}>
                <p>- Desarrollo de web y apps</p>
                <p>- Diseño UX</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

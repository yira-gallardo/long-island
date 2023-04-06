import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function Artes() {
  return (
    <>
      <Head>
        <title>Long Island - Artes</title>
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
                <h2>Artes finales y adaptaciones</h2>
              </div>
              <div className={styles.subtitle}>
                Trabajamos de la mano con otras agencias y clientes. Nos
                especializamos en volúmenes altos de entregables sin sacrificar
                la calidad.
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

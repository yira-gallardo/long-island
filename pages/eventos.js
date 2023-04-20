import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
          <div className={styles.carousel}>
            <Carousel
              autoPlay
              infiniteLoop
              interval={2000}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              stopOnHover={false}
            >
              <div className={styles.items}>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-1.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-2.svg.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-3.svg.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-4.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-5.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-6.svg.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-7.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-8.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-9.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-10.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-11.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-12.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-13.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-14.svg.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-15.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-16.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-17.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-18.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-19.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
                <div className={styles.item}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/client-20.jpg"
                      alt="island"
                      className={styles.img}
                      width={1000}
                      height={600}
                    />
                  </motion.div>
                </div>
              </div>
            </Carousel>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import Image from "next/image";
import { Nav } from "@/components/Nav/Nav";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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

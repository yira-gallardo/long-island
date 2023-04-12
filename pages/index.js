import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useRef } from "react";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { motion } from "framer-motion";

export default function Home() {
  const serviciosOverlayRef = useRef();
  const serviciosBgRef = useRef();
  const video1 = useRef();
  const video2 = useRef();
  const video3 = useRef();
  const video4 = useRef();
  const video5 = useRef();
  const video6 = useRef();

  const serviciosHoverInHandler = (videoRef) => {
    serviciosOverlayRef.current.classList.add(styles.active);
    serviciosBgRef.current.classList.add(styles.active);
    videoRef === "1" && video1.current.classList.add(styles.active);
    videoRef === "2" && video2.current.classList.add(styles.active);
    videoRef === "3" && video3.current.classList.add(styles.active);
    videoRef === "4" && video4.current.classList.add(styles.active);
    videoRef === "5" && video5.current.classList.add(styles.active);
    videoRef === "6" && video6.current.classList.add(styles.active);
  };
  const serviciosHoverOutHandler = (videoRef) => {
    serviciosOverlayRef.current.classList.remove(styles.active);
    serviciosBgRef.current.classList.remove(styles.active);
    videoRef === "1" && video1.current.classList.remove(styles.active);
    videoRef === "2" && video2.current.classList.remove(styles.active);
    videoRef === "3" && video3.current.classList.remove(styles.active);
    videoRef === "4" && video4.current.classList.remove(styles.active);
    videoRef === "5" && video5.current.classList.remove(styles.active);
    videoRef === "6" && video6.current.classList.remove(styles.active);
  };
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Long Island</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.whatsApp}>
          <a href="https://wa.me/525530348016" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
        </div>
        <Header />
        <section className={styles.header} id="header">
          <div className="container">
            <div className={styles.headerBox}>
              <div className={styles.left}>
                <div className={styles.text}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    <h3>
                      Somos una agencia creativa, digital y de marketing que
                      colabora con clientes de México, Estados Unidos y Canada.
                    </h3>
                    <div className={styles.title}>
                      <div className={styles.divider}>
                        <div className={styles.line} />
                        <div className={styles.line} />
                        <div className={styles.line} />
                        <div className={styles.line} />
                      </div>
                    </div>
                    <p>
                      Trabajamos de la mano con empresas que buscan llevar su
                      marca al siguiente nivel, con un enfoque orientado a
                      objetivos, crecimiento e impacto en las audiencias.
                    </p>
                    <p>
                      Vemos la comunicación de marca como un todo; desde la
                      concepción de la estrategia, creatividad y ejecución de la
                      misma.
                    </p>
                    <p>
                      Long Island, al ser una agencia boutique, brinda servicio
                      personalizado cuidando los intereses y objetivos de cada
                      uno de sus clientes. Buscamos relaciones a largo plazo que
                      nos permitan crecer en conjunto.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.image}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    <Image
                      src="/img/nosotros.jpg"
                      alt="island"
                      className={styles.imageImg}
                      width={2000}
                      height={1336}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.servicios} id="servicios">
          <div className={styles.videos}>
            <video autoPlay muted ref={video1}>
              <source src="/img/header.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted ref={video2}>
              <source src="/img/identidad.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted ref={video3}>
              <source src="/img/digital.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted ref={video4}>
              <source src="/img/web.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted ref={video5}>
              <source src="/img/eventos.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted ref={video6}>
              <source src="/img/multimedia.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.bg} ref={serviciosBgRef} />
          <div className={styles.overlay} ref={serviciosOverlayRef} />
          <div className={styles.content}>
            <div className="container">
              <div className={styles.text}>
                <div className={styles.logo}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <Image
                      src="/img/logo-1.png"
                      alt="island"
                      className={styles.img}
                      width={1612}
                      height={213}
                    />
                  </motion.div>
                </div>
                <div className={styles.title}>
                  <div className={styles.divider}>
                    <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} />
                  </div>
                </div>
                <div
                  className={styles.servicio}
                  onMouseOver={() => serviciosHoverInHandler("1")}
                  onMouseLeave={() => serviciosHoverOutHandler("1")}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <Link href="/creatividad" className={styles.link}>
                      Creatividad
                    </Link>
                  </motion.div>
                </div>
                <div
                  className={styles.servicio}
                  onMouseOver={() => serviciosHoverInHandler("2")}
                  onMouseLeave={() => serviciosHoverOutHandler("2")}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <Link href="/identidad" className={styles.link}>
                      Identidad de marca
                    </Link>
                  </motion.div>
                </div>
                <div
                  className={styles.servicio}
                  onMouseOver={() => serviciosHoverInHandler("3")}
                  onMouseLeave={() => serviciosHoverOutHandler("3")}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <Link href="/artes" className={styles.link}>
                      Artes finales y adaptaciones
                    </Link>
                  </motion.div>
                </div>
                <div
                  className={styles.servicio}
                  onMouseOver={() => serviciosHoverInHandler("4")}
                  onMouseLeave={() => serviciosHoverOutHandler("4")}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <Link href="/paginas" className={styles.link}>
                      Páginas web
                    </Link>
                  </motion.div>
                </div>
                <div
                  className={styles.servicio}
                  onMouseOver={() => serviciosHoverInHandler("5")}
                  onMouseLeave={() => serviciosHoverOutHandler("5")}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <Link href="/eventos" className={styles.link}>
                      Eventos Multimedia
                    </Link>
                  </motion.div>
                </div>
                <div
                  className={styles.servicio}
                  onMouseOver={() => serviciosHoverInHandler("6")}
                  onMouseLeave={() => serviciosHoverOutHandler("6")}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <Link href="/planificacion" className={styles.link}>
                      Planificación y compra de medios offline y online
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.home} id="home">
          <div className="container">
            <div className={styles.title}>
              <h2>Nuestro Camino</h2>
              <div className={styles.divider}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
              </div>
            </div>
            <div className={styles.clientes}>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src="/img/client-1.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <Image
                    src="/img/client-2.svg.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Image
                    src="/img/client-3.svg.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Image
                    src="/img/client-4.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Image
                    src="/img/client-5.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Image
                    src="/img/client-6.svg.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Image
                    src="/img/client-7.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <Image
                    src="/img/client-8.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src="/img/client-9.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <Image
                    src="/img/client-10.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Image
                    src="/img/client-11.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Image
                    src="/img/client-12.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Image
                    src="/img/client-13.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Image
                    src="/img/client-14.svg.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Image
                    src="/img/client-15.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <Image
                    src="/img/client-16.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <Image
                    src="/img/client-17.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <Image
                    src="/img/client-18.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <Image
                    src="/img/client-19.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className={styles.cliente}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <Image
                    src="/img/client-20.jpg"
                    alt="island"
                    className={styles.logoImg}
                    width={1000}
                    height={600}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contacto} id="contacto">
          <div className="container">
            <div className={styles.contactanos}>
              <div className={styles.left}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Image
                    src="/img/fondo-contacto.png"
                    alt="Platicanos tu idea"
                    className={styles.img}
                    width={1921}
                    height={2567}
                  />
                </motion.div>
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h2>Platícanos tu idea</h2>
                  <div className={styles.divider}>
                    <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} />
                  </div>
                </div>
                <div className={styles.form}>
                  <label>Nombre</label>
                  <input type="text" name="name" />
                  <label>Email</label>
                  <input type="text" name="name" />
                  <label>Mensaje</label>
                  <textarea></textarea>
                  <button>Enviar mensaje</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

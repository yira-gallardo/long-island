import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useRef } from "react";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Home() {
  const serviciosOverlayRef = useRef();
  const serviciosBgRef = useRef();
  const video1 = useRef();
  const video2 = useRef();
  const video3 = useRef();
  const video4 = useRef();
  const video5 = useRef();
  const video6 = useRef();
  const video7 = useRef();
  const video8 = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s90bl01",
        "template_dicqo7r",
        form.current,
        "QRXApDrLGQPRaipq-"
      )
      .then(
        () => {
          alert("Mensaje enviado");
        },
        () => {
          alert("Un error sucedió, intenta de nuevo");
        }
      );
  };

  const serviciosHoverInHandler = (videoRef) => {
    serviciosOverlayRef.current.classList.add(styles.active);
    serviciosBgRef.current.classList.add(styles.active);
    videoRef === "1" && video1.current.classList.add(styles.active);
    videoRef === "2" && video2.current.classList.add(styles.active);
    videoRef === "3" && video3.current.classList.add(styles.active);
    videoRef === "4" && video4.current.classList.add(styles.active);
    videoRef === "5" && video5.current.classList.add(styles.active);
    videoRef === "6" && video6.current.classList.add(styles.active);
    videoRef === "7" && video6.current.classList.add(styles.active);
    videoRef === "8" && video6.current.classList.add(styles.active);
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
    videoRef === "7" && video6.current.classList.remove(styles.active);
    videoRef === "8" && video6.current.classList.remove(styles.active);
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
                    <Link href="/marketing" className={styles.link}>
                      Marketing digital
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
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <Link href="/eventos" className={styles.link}>
                      Eventos
                    </Link>
                  </motion.div>
                </div>
                <div
                  className={styles.servicio}
                  onMouseOver={() => serviciosHoverInHandler("7")}
                  onMouseLeave={() => serviciosHoverOutHandler("7")}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <Link href="/multimedia" className={styles.link}>
                      Multimedia
                    </Link>
                  </motion.div>
                </div>
                <div
                  className={styles.servicio}
                  onMouseOver={() => serviciosHoverInHandler("8")}
                  onMouseLeave={() => serviciosHoverOutHandler("8")}
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
        <section className={styles.serviciosMobile}>
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            stopOnHover={false}
          >
            <Link href="/creatividad">
              <div
                className={styles.servicio}
                style={{ backgroundImage: "url(/img/servicio-1.jpg)" }}
              >
                <h2>Creatividad</h2>
              </div>
            </Link>
            <Link href="/identidad">
              <div
                className={styles.servicio}
                style={{ backgroundImage: "url(/img/servicio-2.jpg)" }}
              >
                <h2>Identidad de marca</h2>
              </div>
            </Link>
            <Link href="/artes">
              <div
                className={styles.servicio}
                style={{ backgroundImage: "url(/img/servicio-3.jpg)" }}
              >
                <h2>Artes finales y adaptaciones</h2>
              </div>
            </Link>
            <Link href="/paginas">
              <div
                className={styles.servicio}
                style={{ backgroundImage: "url(/img/servicio-4.jpg)" }}
              >
                <h2>Páginas web</h2>
              </div>
            </Link>
            <Link href="marketing">
              <div
                className={styles.servicio}
                style={{ backgroundImage: "url(/img/servicio-5.jpg)" }}
              >
                <h2>Marketing digital</h2>
              </div>
            </Link>
            <Link href="eventos">
              <div
                className={styles.servicio}
                style={{ backgroundImage: "url(/img/servicio-6.jpg)" }}
              >
                <h2>Eventos</h2>
              </div>
            </Link>
            <Link href="multimedia">
              <div
                className={styles.servicio}
                style={{ backgroundImage: "url(/img/servicio-7.jpg)" }}
              >
                <h2>Multimedia</h2>
              </div>
            </Link>
            <Link href="planificacion">
              <div
                className={styles.servicio}
                style={{ backgroundImage: "url(/img/servicio-8.jpg)" }}
              >
                <h2>Planificación y compra de medios offline y online</h2>
              </div>
            </Link>
          </Carousel>
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
                    <div className={styles.line} />
                  </div>
                </div>
                <div className={styles.form}>
                  <form ref={form} onSubmit={sendEmail}>
                    <label>Nombre</label>
                    <input type="text" name="nombre" required />
                    <label>Email</label>
                    <input type="email" name="email" required />
                    <label>Mensaje</label>
                    <textarea name="mensaje" required></textarea>
                    <button>Enviar mensaje</button>
                  </form>
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

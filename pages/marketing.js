import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import { Header } from "@/components/Header/Header";

export default function Marketing() {
  return (
    <>
      <Head>
        <title>Long Island - Marketing</title>
        <meta name="description" content="Long Island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className={styles.marketing}>
          <div className="container">
            <div className={styles.title}>
              <h2>Marketing digital</h2>
            </div>
            <div className={styles.subtitle}>
              <h4>
                Creamos el ecosistema digital ideal para tu marca. Nuestra
                metodología de trabajo está orientada a objetivos. Estudiamos
                cuidadosamente a las audiencias para seleccionar la comunicación
                y los canales adecuados.
              </h4>
            </div>
            <div className={styles.text}>
              <p>- Desarrollo de contenido</p>
              <p>- Estrategias marketing digital</p>
              <p>- Campañas en Google As y redes sociales</p>
              <p>- Programmatic</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

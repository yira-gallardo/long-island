import Head from "next/head";
import styles from "@/styles/Subpagina.module.css";
import { Header } from "@/components/Header/Header";

export default function Multimedia() {
  return (
    <>
      <Head>
        <title>Long Island - Creatividad</title>
        <meta name="description" content="Long Island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className={styles.multimedia}>
          <div className="container">
            <div className={styles.title}>
              <h2>Multimedia</h2>
            </div>
            <div className={styles.subtitle}>
              <h4>
                Realizamos videos y tomas fotográficas inhouse para catálogos,
                spots, contenido en redes sociales, materiales de publicidad y
                más.
              </h4>
            </div>
            <div className={styles.text}>
              <p>- Toma fotográfica y de video</p>
              <p>- Producción de video para medios digitales</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

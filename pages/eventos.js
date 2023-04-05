import Head from "next/head";
import styles from "@/styles/Eventos.module.css";

export default function Eventos() {
  return (
    <>
      <Head>
        <title>Long Island - Creatividad</title>
        <meta name="description" content="Long Island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.eventos}>
          <div className="container">
            <div className={styles.title}>
              <h2>Eventos</h2>
            </div>
            <div className={styles.subtitle}>
              <h4>
                Desde un stand hasta un evento en diferentes ciudades. Nosotros
                te apoyamos con el concepto, logística y montaje.
              </h4>
            </div>
            <div className={styles.text}>
              <p>- Stands</p>
              <p>- Realización y logística de eventos</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

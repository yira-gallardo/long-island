import Head from "next/head";
import styles from "@/styles/Identidad.module.css";

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
        <div className={styles.identidad}>
          <div className="container">
            <div className={styles.title}>
              <h2>Identidad de marca</h2>
            </div>
            <div className={styles.subtitle}>
              <h4>
                Transmitimos la personalidad y esencia que hace única a tu
                marca.
              </h4>
            </div>
            <div className={styles.text}>
              <p>- Logo</p>
              <p>- Branding</p>
              <p>- Estrategia e identidad de marca</p>
              <p>- Brandbooka</p>
              <p>- Imagen corporativa</p>
              <p>- Empaques</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

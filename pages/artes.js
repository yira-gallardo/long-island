import Head from "next/head";
import styles from "@/styles/Artes.module.css";

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
        <div className={styles.artes}>
          <div className="container">
            <div className={styles.title}>
              <h2>Artes finales y adaptaciones</h2>
            </div>
            <div className={styles.subtitle}>
              <h4>
                Trabajamos de la mano con otras agencias y clientes. Nos
                especializamos en volúmenes altos de entregables sin sacrificar
                la calidad.
              </h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

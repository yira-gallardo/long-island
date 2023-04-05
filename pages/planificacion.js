import Head from "next/head";
import styles from "@/styles/Planificacion.module.css";

export default function Planificacion() {
  return (
    <>
      <Head>
        <title>Long Island - Planificación</title>
        <meta name="description" content="Long Island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.planificacion}>
          <div className="container">
            <div className={styles.title}>
              <h2>Planificación y compra de medios offline y online</h2>
            </div>
            <div className={styles.subtitle}>
              <h4>
                Proponemos el mix de medios offline y online ideal para impactar
                al target potencial de tu marca.
              </h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

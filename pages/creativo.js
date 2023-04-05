import Head from "next/head";
import styles from "@/styles/Creativo.module.css";

export default function Creativo() {
  return (
    <>
      <Head>
        <title>Long Island - Creatividad</title>
        <meta name="description" content="Long Island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.creatividad}>
          <div className="container">
            <div className={styles.title}>
              <h2>Creatividad</h2>
            </div>
            <div className={styles.subtitle}>
              <h4>
                Partimos de los objetivos de nuestros clientes, creando
                estrategias personalizadas, inyectando creatividad para generar
                campañas de impacto que conecten con sus audiencias.
              </h4>
            </div>
            <div className={styles.text}>
              <p>- Campañas creativas</p>
              <p>- Master Graphics</p>
              <p>- Materiales POP, digitales e impresos</p>
              <p>- Estrategias y creatividad en punto de venta</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import styles from "@/styles/Paginas.module.css";

export default function Paginas() {
  return (
    <>
      <Head>
        <title>Long Island - Páginas</title>
        <meta name="description" content="Long Island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.paginas}>
          <div className="container">
            <div className={styles.title}>
              <h2>Páginas web</h2>
            </div>
            <div className={styles.subtitle}>
              <h4>
                Desarrollamos páginas web orientadas al user experience y buenas
                prácticas de programación. Nuestros dos ingredientes: Diseño
                atractivo + funcionalidad.
              </h4>
            </div>
            <div className={styles.text}>
              <p>- Desarrollo de web y apps</p>
              <p>- Diseño UX</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

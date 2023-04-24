import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";

export const Header = () => {
  return (
    <section className={styles.video} id="top">
      <video autoPlay muted>
        <source src="/img/header.mp4" type="video/mp4" />
      </video>
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
    </section>
  );
};

import styles from "@/styles/Subpagina.module.css";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export const MyCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className={styles.carousel}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          stopOnHover={false}
        >
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-1.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-2.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-3.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-4.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-5.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-6.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-7.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-8.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-9.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-10.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-11.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-12.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-13.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-14.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-15.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-16.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-17.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-18.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-19.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-20.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className={styles.carouselMobile}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          stopOnHover={false}
        >
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-1.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-2.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-3.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-4.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-5.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-6.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-7.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-8.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-9.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-10.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-11.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-12.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-13.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-14.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-15.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-16.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-13.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-14.svg.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-15.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-16.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-17.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-18.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-19.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/img/client-20.jpg"
                  alt="island"
                  className={styles.img}
                  width={1000}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
        </Carousel>
      </div>
    </motion.div>
  );
};

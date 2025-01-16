// REACT
import React from "react";

// NEXT
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div id="/" className={styles.container}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src="/yccHero.jpeg"
        priority={true}
        className={styles.hero}
        alt="an artistic photo of a choir singing and having fun"
      />

      <h1 className={styles.title}>
        York <br /> Community
        <br /> Choir
      </h1>

      <div className={styles.cta}>
        <h2 className={styles.subtitle}>
          Experience the joy of singing in a friendly and welcoming activity
        </h2>
        <Link href="#">
          <button className={styles.button}>Join Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

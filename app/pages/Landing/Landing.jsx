// REACT
import React from "react";

// NEXT
import Image from "next/image";

// STYLES
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src="/yccHero.jpeg"
        priority={true}
        className={styles.hero}
        alt="an artistic photo of a choir singing and having fun"
      />
    </div>
  );
};

export default Landing;

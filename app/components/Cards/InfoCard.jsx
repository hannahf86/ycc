"use client";
// REACT
import React from "react";

// NEXT
import Image from "next/image";

// DATA
import infoData from "@/app/data/infoData";

// STYLES
import styles from "./infoCard.module.css";

const InfoCard = () => {
  return (
    <div className={styles.cardContainer}>
      {infoData.map((card) => (
        <div key={card.id} className={styles.container}>
          <Image
            src={card.image}
            width={60}
            height={60}
            alt={card}
            className={styles.image}
          />
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
          <p className={styles.furtherInfo}>{card.furtherInfo}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;

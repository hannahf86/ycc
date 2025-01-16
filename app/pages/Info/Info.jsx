"use client";
// REACT
import React from "react";

// NEXT
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "./info.module.css";

// COMPONENTS
import InfoCard from "@/app/components/Cards/InfoCard";

const Info = () => {
  return (
    <div id="info" className={styles.container}>
      <h2 className={styles.title}>Information</h2>
      <InfoCard />
    </div>
  );
};

export default Info;
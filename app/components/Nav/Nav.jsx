"use client";

// REACT
import React from "react";

// NEXT
import Link from "next/link";

// STYLES
import styles from "./nav.module.css";

// COMPONENTS
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <div>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/when" className={styles.link}>
          When
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/faqs" className={styles.link}>
          FAQs
        </Link>
        <button className={styles.button}>Get Involved</button>
      </div>

      {/* MOBILE NAV */}
      <MobileNav />
    </div>
  );
};

export default Nav;

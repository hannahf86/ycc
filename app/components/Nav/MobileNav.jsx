"use client";

// REACT
import React, { useState } from "react";

// NEXT
import Link from "next/link";

// STYLES
import styles from "./mobileNav.module.css";

// ICONS
import { HiMenuAlt4, HiX } from "react-icons/hi";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      {!open && (
        <div className={styles.menuContainer}>
          <HiMenuAlt4 className={styles.menuIcon} onClick={toggleMenu} />
        </div>
      )}

      {open && (
        <>
          <div className={styles.menuContainer}>
            <HiX className={styles.menuIcon} onClick={toggleMenu} />
          </div>
          <div className={styles.container}>
            <Link href="/">
              <button className={styles.linkButton}>Home</button>
            </Link>

            <Link href="/">
              <button className={styles.linkButton}>When</button>
            </Link>

            <Link href="/">
              <button className={styles.linkButton}>About</button>
            </Link>

            <Link href="/">
              <button className={styles.linkButton}>FAQs</button>
            </Link>

            <Link href="/">
              <button className={styles.ctaButton}>Get Involved</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;

// REACT
import React from "react";

// NEXT
import Link from "next/link";

// ICONS
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTikTok,
  AiFillYoutube,
} from "react-icons/ai";

// STYLES
import styles from "./sideNav.module.css";

const SideNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Link href="https://www.jorvikweb.dev">
          <AiFillFacebook size={25} color="#cfa136" />
        </Link>
        <Link href="https://www.jorvikweb.dev">
          <AiFillInstagram size={25} color="#cfa136" />
        </Link>
        <Link href="https://www.jorvikweb.dev">
          <AiFillTikTok size={25} color="#cfa136" />
        </Link>
        <Link href="https://www.jorvikweb.dev">
          <AiFillYoutube size={25} color="#cfa136" />
        </Link>
      </div>
    </div>
  );
};

export default SideNav;

// REACT
import React from "react";

// NEXT
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "./about.module.css";

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.picContainer}>
        <Image
          src="/pf.png"
          alt="profile picture of Paul Feehan, Director of York Community Choir"
          width={300}
          height={300}
          className={styles.profilePic}
        />
      </div>

      {/* TEXT */}
      <div className={styles.column}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>York Community Choir</h2>
          <p className={styles.text}>
            was founded by award-winning Choral Director, Paul Feehan. With over
            40 years experience, Paul firmly believes that everyone has a voice
            and everyone can sing.
          </p>
          <p className={styles.text}>
            If you are looking for a new challenge in 2025 that will bring you
            laughter, joy and new friends, join YCC today!
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Link href="/signup">
            <button className={styles.button}>
              Sign Up for a <br />
              FREE TRIAL
            </button>
          </Link>

          <Link href="/info">
            <button className={styles.ghostButton}>
              More <br />
              Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

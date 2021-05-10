import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>© 2021 Victor Zukeran </p>
      <hr />
      <section className={styles.socialMedia}>
        <a
          href="https://www.linkedin.com/in/victorakio/"
          rel="noopener noreferer"
        >
          <FaLinkedin size="2rem" />
        </a>
        <a href="https://github.com/victorakio" rel="noopener noreferer">
          <FaGithubSquare size="2rem" />
        </a>
      </section>
    </footer>
  );
}

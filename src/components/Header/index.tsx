import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo-cor.svg" alt="logo" />

      <nav>
        <ul>
          <li className={styles.active}>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

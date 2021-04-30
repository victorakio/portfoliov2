import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Victor Akio</h1>

      <nav>
        <ul>
          <li>Home</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}

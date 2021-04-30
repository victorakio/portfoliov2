import styles from "./styles.module.scss";

export function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textWrapper}>
        <p>Olá!</p>
        <p>
          Sou um desenvolvedor web focado em FrontEnd e Wordpress, atuo há 7
          anos na área e posso te ajudar a criar soluções elegantes, modernas e
          eficientes para o seu negócio.
        </p>
      </div>
    </div>
  );
}

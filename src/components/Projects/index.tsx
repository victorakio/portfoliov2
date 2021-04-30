import { Project } from "./Project";
import styles from "./styles.module.scss";

export function Projects() {
  return (
    <section className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>Projetos</h2>

      <div className={styles.projects}>
        <Project
          name="Site do CPS"
          image="/images/cps.jpg"
          link="https://www.cps.sp.gov.br"
        />
        <Project
          name="Akioflix"
          image="/images/akioflix.jpg"
          link="https://akioflix.vercel.app/"
        />
        <Project
          name="Spotfinder"
          image="/images/spotfinder.jpg"
          link="https://spotfinder.vercel.app/"
        />
        <Project
          name="Github Explorer"
          image="/images/github-explorer.jpg"
          link="https://github-explorer-eta.vercel.app/"
        />
      </div>
    </section>
  );
}

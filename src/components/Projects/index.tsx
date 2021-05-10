import { Project } from "./Project";
import styles from "./styles.module.scss";

export function Projects() {
  return (
    <section className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle} id="projects">
        Projetos
      </h2>

      <div className={styles.projects}>
        <Project
          name="Site do CPS"
          image="/images/cps.jpg"
          link="https://www.cps.sp.gov.br"
          description="Portal institucional do Centro Paula Souza, desenvolvido em Wordpress utilizando o modo multisite, para abrigar todos os sites ligados a instituição de forma centralizada e padronizada. O tema é personalizado e construído do zero."
        />
        <Project
          name="Akioflix"
          image="/images/akioflix.jpg"
          link="https://akioflix.vercel.app/"
          description="Projeto desenvolvido na Imersão React da Alura, é uma interface similar ao Netflix, para explorar a flexibilidade que o ReactJS possibilita na hora de construir aplicações Web"
        />
        <Project
          name="Spotfinder"
          image="/images/spotfinder.jpg"
          link="https://spotfinder.vercel.app/"
          description="Aplicação em ReactJS que faz integração com a API do spotify, permitindo fazer login através de uma conta do spotify e fazer buscas por artistas, músicas e albuns."
        />
        <Project
          name="Github Explorer"
          image="/images/github-explorer.jpg"
          link="https://github-explorer-eta.vercel.app/"
          description="Utilizando a api de usuários do Github essa aplicação faz a busca de usuários do github, listando seus repositórios."
        />
      </div>
    </section>
  );
}

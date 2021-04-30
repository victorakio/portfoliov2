import styles from "./project.module.scss";

interface ProjectProps {
  image: string;
  name: string;
  link: string;
}

export function Project({ image, name, link }: ProjectProps) {
  return (
    <div className={styles.projectWrapper}>
      <a href={link}>
        <img src={image} alt={name} />
      </a>
    </div>
  );
}

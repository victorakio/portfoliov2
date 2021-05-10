import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import styles from "./project.module.scss";

interface ProjectProps {
  image: string;
  name: string;
  link: string;
  description: string;
}

export function Project({ image, name, link, description }: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={styles.projectWrapper}
        onClick={() => setIsModalOpen(true)}
      >
        <img src={image} alt={name} />
      </div>
      <div
        className={`${styles.projectOverlay} ${isModalOpen && styles.active}`}
      >
        <div className={styles.projectDetails}>
          <img src={image} alt={name} />
          <div>
            <FaTimesCircle onClick={() => setIsModalOpen(false)} />
            <h2>{name}</h2>
            <p>{description}</p>

            <a href={link} target="blank" rel="noopener noreferer">
              Visite o site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

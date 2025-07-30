import React from "react";
import styles from "./robotGallery.module.scss";

interface Robot {
  name: string;
  year: string;
  description: string;
  image: string;
  specs: string[];
}

interface RobotGalleryProps {
  title: string;
  robots: Robot[];
}

export default function RobotGallery({ title, robots }: RobotGalleryProps): React.ReactElement {
  return (
    <section className={styles.robotGallery}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.robotGrid}>
          {robots.map((robot, index) => (
            <div key={index} className={styles.robotCard}>
              <div className={styles.robotImage}>
                <img src={robot.image} alt={`${robot.year} Robot - ${robot.name}`} />
              </div>
              <div className={styles.robotInfo}>
                                            <h3>{robot.year} - &ldquo;{robot.name}&rdquo;</h3>
                <p>{robot.description}</p>
                <div className={styles.robotSpecs}>
                  {robot.specs.map((spec, specIndex) => (
                    <span key={specIndex}>{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

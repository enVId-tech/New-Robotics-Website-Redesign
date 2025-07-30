import React from "react";
import styles from "./teamOverviewSection.module.scss";

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface TeamOverviewSectionProps {
  teamName: string;
  teamDescription: string[];
  highlights: Highlight[];
  image: string;
  imageCaption: string;
}

export default function TeamOverviewSection({
  teamName,
  teamDescription,
  highlights,
  image,
  imageCaption
}: TeamOverviewSectionProps): React.ReactElement {
  return (
    <section className={styles.teamOverview}>
      <div className={styles.container}>
        <div className={styles.overviewContent}>
          <div className={styles.overviewText}>
            <h1>{teamName}</h1>
            {teamDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  <h3>{highlight.icon} {highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.overviewImage}>
            <img src={image} alt={teamName} />
            <div className={styles.imageCaption}>
              {imageCaption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

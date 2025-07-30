import React from "react";
import styles from "./teamStructure.module.scss";

interface Subteam {
  icon: string;
  name: string;
  description: string;
  skills: string[];
}

interface TeamStructureProps {
  title: string;
  subteams: Subteam[];
}

export default function TeamStructure({ title, subteams }: TeamStructureProps): React.ReactElement {
  return (
    <section className={styles.teamStructure}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.subteamsGrid}>
          {subteams.map((subteam, index) => (
            <div key={index} className={styles.subteam}>
              <div className={styles.subteamIcon}>{subteam.icon}</div>
              <h3>{subteam.name}</h3>
              <p>{subteam.description}</p>
              <div className={styles.subteamSkills}>
                {subteam.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

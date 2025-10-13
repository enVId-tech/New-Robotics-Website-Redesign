import React from "react";
import styles from "./teamsOverview.module.scss";
import { getServerContent } from "@/utils/content";

export default async function TeamsOverview(): Promise<React.ReactElement> {
  const content = await getServerContent();
  
  // Use CMS data or fallback to defaults
  const teams = content?.teamsOverview || [
    {
      id: "frc",
      logo: "/logos/FRCLogo.png",
      name: "FRC Team 4079",
      description: "Our flagship team competes in the FIRST Robotics Competition, innovating and building competition-ready robots for high-stakes regional competitions.",
      founded: "2012",
      link: '/frc'
    },
    {
      id: "ftc",
      logo: "/logos/FTCLogo.png",
      name: "FTC Teams 19812 & 23796",
      description: "Our FTC teams design, build, and program robots to compete in alliance-based challenges, focusing on innovation and teamwork.",
      founded: "2021",
      link: '/ftc'
    },
    {
      id: "vex",
      logo: "/logos/VEXLogo.png",
      name: "VEX Robotics",
      description: "Our VEX teams compete in game-based engineering challenges, where our program began and continues to grow new talent.",
      founded: "2009",
      link: '/vex'
    },
  ];

  return (
    <section className={styles.teamsOverviewSection}>
      <h2>Meet Our Teams</h2>
      <div className={styles.teamsGrid}>
        {teams.map((team) => (
          <div className={styles.teamCard} key={team.id}>
            <img src={team.logo} alt={team.name + " Logo"} />
            <h3>{team.name}</h3>
            <p>{team.description}</p>
            <div className={styles.founded}>Founded: {team.founded}</div>
            <a href={team.link} className={styles.teamLink}>Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

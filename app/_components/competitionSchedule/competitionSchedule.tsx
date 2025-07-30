import React from "react";
import styles from "./competitionSchedule.module.scss";

interface Event {
  month: string;
  day: string;
  title: string;
  description: string;
  location: string;
}

interface CompetitionScheduleProps {
  title: string;
  events: Event[];
}

export default function CompetitionSchedule({ title, events }: CompetitionScheduleProps): React.ReactElement {
  return (
    <section className={styles.competitionSchedule}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.scheduleGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div className={styles.eventDate}>
                <div className={styles.month}>{event.month}</div>
                <div className={styles.day}>{event.day}</div>
              </div>
              <div className={styles.eventInfo}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className={styles.eventLocation}>{event.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

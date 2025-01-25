"use server";
import React from "react";
import styles from "@/styles/_components/aboutFRCTeams.module.scss";
import img from "@/public/logos/FRC4079Logo.png";

interface AboutTeam4079Props {
    children?: React.ReactNode;
}

export default async function AboutTeam4079({children}: AboutTeam4079Props): Promise<React.ReactElement> {
    return (
        <section className={styles.aboutTeam4079}>
            <div className={styles.content}>
                <h2>About Team 4079</h2>
                <p>
                    Team 4079, also known as "Quantum Leap", is a robotics team based in the United States. The team was founded in 2012 and has been competing in the FIRST Robotics Competition (FRC) ever since. The team is made up of high school students who are passionate about robotics and engineering.
                </p>
                <p>
                    The team's mission is to inspire and educate young people in the fields of science, technology, engineering, and mathematics (STEM). They do this by building robots that can compete in various competitions, as well as by mentoring younger students and promoting STEM education in their community.
                </p>
                <p>
                    Team 4079 has had a lot of success over the years, including winning multiple awards at regional and national competitions. They are known for their innovative designs and their ability to work together as a team to achieve their goals.
                </p>
                <p>
                    In addition to their competitive success, Team 4079 is also committed to giving back to their community. They participate in various outreach programs, including hosting workshops for younger students and volunteering at local events.
                </p>
                <img src={img.src} alt={"Team 4079"} />
                {children}
            </div>
        </section>
    );
}
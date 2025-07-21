"use server";
import React from "react";
import styles from "@/app/frc/frc.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import img1 from "@/public/images/FRCBanner.jpg";
import AboutTeam4079 from "@/app/frc/_components/aboutTeam4079/aboutTeam4079";
import TeamMembers from "@/app/_components/teamMembers/teamMembers";
import Achievements from "@/app/_components/achievements/achievements";
import MainHead from "@/app/_components/head";

export default async function FRC(): Promise<React.ReactElement> {
    const description: string[] = [
        "Team 4079, also known as \"Quantum Leap\", is a robotics team based in the United States. The team was founded in 2012 and has been competing in the FIRST Robotics Competition (FRC) ever since. The team is made up of high school students who are passionate about robotics and engineering.",
        "The team's mission is to inspire and educate young people in the fields of science, technology, engineering, and mathematics (STEM). They do this by building robots that can compete in various competitions, as well as by mentoring younger students and promoting STEM education in their community.",
        "Team 4079 has had a lot of success over the years, including winning multiple awards at regional and national competitions. They are known for their innovative designs and their ability to work together as a team to achieve their goals.",
        "In addition to their competitive success, Team 4079 is also committed to giving back to their community. They participate in various outreach programs, including hosting workshops for younger students and volunteering at local events."
    ];

    // Filter achievements for FRC only
    const frcAchievements = [
        {
            id: '1',
            title: 'Regional Champions',
            description: 'Team 4079 achieved first place at the Los Angeles Regional Competition',
            year: '2024',
            type: 'FRC' as const,
            award: '1st Place - Regional Champions',
            image: '/images/comp/FRC_1.jpg'
        },
        {
            id: '6',
            title: 'Engineering Excellence',
            description: 'Recognized for outstanding robot design and technical documentation',
            year: '2024',
            type: 'FRC' as const,
            award: 'Engineering Excellence Award'
        },
        {
            id: '7',
            title: 'Autonomous Award',
            description: 'Outstanding autonomous programming performance',
            year: '2023',
            type: 'FRC' as const,
            award: 'Autonomous Award'
        }
    ];

    return (
        <div id={`${styles.frc}`}>
            <MainHead headTitle={"FRC"} />
            <Navbar/>
            <Title
                title={"FIRST Robotics Competition"}
                description={"FRC Team 4079 - Quantum Leap"}
                img1={img1}
                bgMoveUp={70}
            />
            <AboutTeam4079
                description={description}
            />
            <TeamMembers 
                showFilter={false}
                title="FRC Team Members"
            />
            <Achievements 
                achievements={frcAchievements}
                title="FRC Achievements"
            />
            <Footer/>
        </div>
    )
}
"use server";
import React from "react";
import styles from "@/app/team/team.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import TeamMembers from "@/app/_components/teamMembers/teamMembers";
import MainHead from "@/app/_components/head";

export default async function Team(): Promise<React.ReactElement> {
    return (
        <div className={styles.teamPage}>
            <MainHead headTitle={"Team"} />
            <Navbar />
            <Title 
                title={"Our Amazing Team"} 
                description={"Meet the talented students who make OA Robotics possible"}
                bgMoveUp={40}
            />
            <TeamMembers 
                showFilter={true}
                title="Team Members"
            />
            <Footer />
        </div>
    );
}

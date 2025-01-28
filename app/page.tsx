"use server";
import React from "react";
import Navbar from "@/app/_components/navbar";
import styles from "@/styles/home.module.scss";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";
// import img from "@/public/images/FrontPageBanner.jpg";
import AboutBrief from "@/app/_components/aboutbrief";

export default async function Home(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.homepage}`}>
            <Navbar isFixed={true} />
            <Title title={"OXFORD ACADEMY ROBOTICS"} description={"Learn. Compete. Thrive."}/>
            <AboutBrief/>
            <Footer/>
        </div>
    )
}
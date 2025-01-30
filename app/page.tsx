"use server";
import React from "react";
import Navbar from "@/app/_components/navbar";
import styles from "@/styles/home.module.scss";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";
import AboutBrief from "@/app/_components/aboutbrief";
import MainHead from "@/app/_components/head";
import Slogan from "@/app/_components/slogan";

// Images
import img from "@/public/images/FrontPageBanner.jpg";
import img2 from "@/public/images/collage2.png";

export default async function Home(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.homepage}`}>
            <MainHead headTitle={"Home"}/>
            <Navbar isFixed={true}/>
            <Title title={"OXFORD ACADEMY ROBOTICS"} description={"Learn. Compete. Thrive."}/>
            <AboutBrief
                img={img2}
                description={"Oxford Academy Robotics is a student-run organization that competes in the FIRST Robotics Competition (FRC), FIRST Tech Challenge (FTC), and VEX Robotics Competition. Our mission is to inspire students to pursue careers in STEM fields by providing them with the opportunity to learn, compete, and thrive in a supportive environment."}
            />
            <Slogan
                img={[img, img, img]}
                description={"We are Oxford Academy Robotics, a high school robotics team based in Cypress, California. We are dedicated to inspiring students to pursue careers in STEM fields through hands-on experience in robotics."}
                title={"Our Goals"}
            />
            <Footer/>
        </div>
    )
}
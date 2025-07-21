import React from "react";
import { Metadata } from "next";
import Navbar from "@/app/_components/navbar/navbar";
import styles from "@/app/home.module.scss";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import AboutBrief from "@/app/_components/aboutbrief/aboutbrief";
import Slogan from "@/app/_components/slogan/slogan";
import NewsSection from "@/app/_components/newsSection/newsSection";
import Achievements from "@/app/_components/achievements/achievements";
import Stats from "@/app/_components/stats/stats";
import {sponsors} from "@/utils/sponsors";

export const metadata: Metadata = {
    title: 'Home - OA Robotics',
    description: 'Oxford Academy Robotics - Excellence in FRC, FTC, and VEX robotics competitions. Join our award-winning STEM education programs.',
    keywords: 'Oxford Academy Robotics, FRC Team 4079, FTC Teams, VEX Teams, STEM Education, Robotics Competition'
}

// Images
import frontBannerImg from "@/public/images/FrontPageBanner.png";
import collage2Img from "@/public/images/collage2.png";
import designImg from "@/public/handmade/FrontPageDesign.webp";

export default async function Home(): Promise<React.ReactElement> {
    return (
        <div className={`${styles.homepage}`}>
            <Navbar isFixed={true}/>
            <Title
                title={"OXFORD ACADEMY ROBOTICS"}
                description={"Learn. Compete. Thrive."}
                img1={frontBannerImg}
                img2={designImg}
            />
            <AboutBrief
                img={collage2Img}
                description={"Oxford Academy Robotics is a student-run organization that competes in the FIRST Robotics Competition (FRC), FIRST Tech Challenge (FTC), and VEX Robotics Competition. Our mission is to inspire students to pursue careers in STEM fields by providing them with the opportunity to learn, compete, and thrive in a supportive environment."}
            />
            <Stats title="Our Impact by the Numbers" />
            <NewsSection 
                title="Latest News"
                maxArticles={3}
                showAll={false}
            />
            <Slogan
                img={[frontBannerImg, frontBannerImg, frontBannerImg]}
                description={"We are Oxford Academy Robotics, a high school robotics team based in Cypress, California. We are dedicated to inspiring students to pursue careers in STEM fields through hands-on experience in robotics."}
                title={"Our Goals"}
            />
            <Achievements 
                title="Recent Achievements"
            />
            <Footer/>
        </div>
    )
}
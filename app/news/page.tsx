import React from "react";
import { Metadata } from "next";
import styles from "@/app/news/news.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import NewsSection from "@/app/_components/newsSection/newsSection";

export const metadata: Metadata = {
    title: "News - OA Robotics Team",
    description: "Stay up to date with our team's achievements and activities. Latest news and updates from our robotics programs.",
    keywords: ["news", "updates", "achievements", "robotics", "FRC", "FTC", "VEX", "competitions", "team news"]
};

export default async function News(): Promise<React.ReactElement> {
    return (
        <div className={styles.newsPage}>
            <Navbar />
            <Title 
                title={"Latest News & Updates"} 
                description={"Stay up to date with our team's achievements and activities"}
                bgMoveUp={30}
            />
            <NewsSection 
                showAll={true}
                title="All News Articles"
            />
            <Footer />
        </div>
    );
}

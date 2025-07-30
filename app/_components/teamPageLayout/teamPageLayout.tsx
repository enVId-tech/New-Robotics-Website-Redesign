import React from "react";
import styles from "./teamPageLayout.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import { StaticImageData } from "next/image";

interface TeamPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  bannerImage: StaticImageData;
  bgMoveUp?: number;
    bgShift?: number;
}

export default function TeamPageLayout({ 
  children, 
  title, 
  description, 
  bannerImage, 
  bgMoveUp = 70,
  bgShift = 0
}: TeamPageLayoutProps): React.ReactElement {
  return (
    <div className={styles.teamPage}>
      <Navbar />
      <Title
        title={title}
        description={description}
        img1={bannerImage}
        bgMoveUp={bgMoveUp}
        bgShift={bgShift}
      />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

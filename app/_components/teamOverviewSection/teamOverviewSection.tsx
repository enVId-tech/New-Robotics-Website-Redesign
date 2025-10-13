import React from "react";
import styles from "./teamOverviewSection.module.scss";
import EditableText from "@/components/editable/EditableText";
import EditableImage from "@/components/editable/EditableImage";

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface TeamOverviewSectionProps {
  teamName: string;
  teamDescription: string[];
  highlights: Highlight[];
  image: string;
  imageCaption: string;
  basePath: string; // e.g., "teams.frc.teamOverview"
}

export default function TeamOverviewSection({
  teamName,
  teamDescription,
  highlights,
  image,
  imageCaption,
  basePath
}: TeamOverviewSectionProps): React.ReactElement {
  return (
    <section className={styles.teamOverview}>
      <div className={styles.container}>
        <div className={styles.overviewContent}>
          <div className={styles.overviewText}>
            <EditableText
              value={teamName}
              path={`${basePath}.teamName`}
              as="h1"
            />
            {teamDescription.map((paragraph, index) => (
              <EditableText
                key={index}
                value={paragraph}
                path={`${basePath}.teamDescription.${index}`}
                as="p"
                multiline
              />
            ))}
            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  <h3>
                    <EditableText
                      value={highlight.icon}
                      path={`${basePath}.highlights.${index}.icon`}
                      as="span"
                    />
                    {" "}
                    <EditableText
                      value={highlight.title}
                      path={`${basePath}.highlights.${index}.title`}
                      as="span"
                    />
                  </h3>
                  <EditableText
                    value={highlight.description}
                    path={`${basePath}.highlights.${index}.description`}
                    as="p"
                    multiline
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.overviewImage}>
            <EditableImage
              src={image}
              alt={teamName}
              path={`${basePath}.image`}
            />
            <div className={styles.imageCaption}>
              <EditableText
                value={imageCaption}
                path={`${basePath}.imageCaption`}
                as="span"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

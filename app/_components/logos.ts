// Interfaces / Types
import {StaticImageData} from "next/image";

// Logos
import AppliedMedical from "@/public/logos/sponsors/applied-medical.png";
import ArgosyFoundation from "@/public/logos/sponsors/argosy-foundation.png";
import Disney from "@/public/logos/sponsors/disney.png";
import Emerson from "@/public/logos/sponsors/emerson.png";
import GeneHaasFoundation from "@/public/logos/sponsors/gene-haas-foundation.png";
import GoEngineer from "@/public/logos/sponsors/go-engineer.png";
import JPL from "@/public/logos/sponsors/jpl.png";
import MSI from "@/public/logos/sponsors/msi.png";
import NASA from "@/public/logos/sponsors/nasa.png";
import Solidworks from "@/public/logos/sponsors/solidworks.png";

type Sponsor = {
    img: StaticImageData;
    name: string;
    link: string;
}

export const sponsors: Sponsor[] = [
    {
        img: AppliedMedical,
        name: "Applied Medical",
        link: "https://www.appliedmedical.com/"
    },
    {
        img: ArgosyFoundation,
        name: "Argosy Foundation",
        link: "https://argosyfdn.org/"
    },
    {
        img: Disney,
        name: "Disney",
        link: "https://www.disney.com/"
    },
    {
        img: Emerson,
        name: "Emerson",
        link: "https://www.emerson.com/"
    },
    {
        img: GeneHaasFoundation,
        name: "Gene Haas Foundation",
        link: "https://haasfoundation.org/"
    },
    {
        img: GoEngineer,
        name: "GoEngineer",
        link: "https://www.goengineer.com/"
    },
    {
        img: JPL,
        name: "JPL",
        link: "https://www.jpl.nasa.gov/"
    },
    {
        img: MSI,
        name: "MSI",
        link: "https://www.msi.com/"
    },
    {
        img: NASA,
        name: "NASA",
        link: "https://www.nasa.gov/"
    },
    {
        img: Solidworks,
        name: "Solidworks",
        link: "https://www.solidworks.com/"
    }
];
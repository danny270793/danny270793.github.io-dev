import Flutter from "../../../../public/images/technologies/flutter.png";
import { ImageMetadata } from "astro";

export interface Technology {
  name: string;
  image: ImageMetadata;
  color: string;
  category:
    | "Mobile"
    | "Web"
    | "CI"
    | "Deployments"
    | "Monitor"
    | "Databases"
    | "BigData"
    | "Microcontrollers";
}
const technologies: Technology[] = [
  {
    name: "Flutter",
    category: "Mobile",
    image: Flutter,
    color: "#042B59",
  },
  /*
  {
    name: "Electron",
    category: "Mobile",
  },
  {
    name: "React",
    category: "Web",
  },
  {
    name: "Github Actions",
    category: "CI",
  },
  {
    name: "Kubernetes",
    category: "Deployments",
  },
  */
];
export default technologies;

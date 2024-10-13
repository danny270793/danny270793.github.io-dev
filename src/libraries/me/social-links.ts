import Youtube from "../../images/social/youtube.svg";
import Github from "../../images/social/github.svg";
import LinkedIN from "../../images/social/linkedin.svg";
import type { ImageMetadata } from "astro";

export interface SocialLink {
  link: string;
  image: ImageMetadata;
  alternativeText: string;
}

const socialLinks: SocialLink[] = [
  {
    link: "https://www.youtube.com/channel/UC5MAQWU2s2VESTXaUo-ysgg",
    image: Youtube,
    alternativeText: "YouTube",
  },
  {
    link: "https://www.github.com/danny270793",
    image: Github,
    alternativeText: "Github",
  },
  {
    link: "https://www.linkedin.com/in/danny270793",
    image: LinkedIN,
    alternativeText: "LinkedIn",
  },
];
export default socialLinks;

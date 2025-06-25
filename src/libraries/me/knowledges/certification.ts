export default interface Certification {
  stared?: boolean
  code: string;
  name: string;
  brand: string;
  link: string;
  date: Date;
  order: number;
  category:
    | "Automation"
    | "IoT"
    | "Data"
    | "Cloud"
    | "Deployment"
    | "Development"
    | "AI"
    | "Data Privacy"
    | "Others";
  image: ImageMetadata;
}

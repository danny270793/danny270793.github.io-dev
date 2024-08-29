import AzureCosmosSpeciality from "../../../../public/images/certifications/20221028 - Azure Cosmos DB Developer Specialty.png";
import { ImageMetadata } from "astro";

export interface Certification {
  code: string;
  name: string;
  brand: string;
  link: string;
  image: ImageMetadata;
}

const certifications: Certification[] = [
  {
    link: "https://www.credly.com/badges/a8fd23c4-72d4-4fd3-85fd-f82584b764b7/public_url",
    name: "Microsoft Certified: Azure Cosmos DB Developer Specialty",
    code: "DP-420",
    brand: "Microsoft",
    image: AzureCosmosSpeciality,
  },
];
export default certifications;

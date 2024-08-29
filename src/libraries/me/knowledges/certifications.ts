import AzureCosmosSpeciality from "../../../../public/images/certifications/20221028 - Azure Cosmos DB Developer Specialty.png";
import UiPath from "../../../../public/images/certifications/20190607 - RPA Developer Certificate of completion.png";
import Arduino from "../../../../public/images/certifications/20200308 - Arduino Fundamentals.png";
import CCASparkAndHadoopDeveloper from "../../../../public/images/certifications/20201108 - CCA Spark And Hadoop Developer.png";
import { ImageMetadata } from "astro";

export interface Certification {
  code: string;
  name: string;
  brand: string;
  link: string;
  date: Date
  image: ImageMetadata;
}

const certifications: Certification[] = [
  {
    link: "https://www.credly.com/badges/a8fd23c4-72d4-4fd3-85fd-f82584b764b7/public_url",
    name: "Microsoft Certified: Azure Cosmos DB Developer Specialty",
    code: "DP-420",
    brand: "Microsoft",
    date: new Date('2022/10/28'),
    image: AzureCosmosSpeciality,
  },
  {
    link: 'https://academy.uipath.com/certification',
    name: 'RPA Developer Certificate of completion',
    brand: 'UiPath',
    code: '',
    date: new Date('2019/06/07'),
    image: UiPath,
  },
  {
    link: 'https://certifications-assets-cf.arduino.cc/certificates/a8d0ed84-3a1c-4b71-9985-c44486ac0e28.pdf',
    name: 'Arduino Fundamentals',
    brand: 'Arduino',
    code: '',
    date: new Date('2020/03/08'),
    image: Arduino
  },
  {
    link: '',
    name: 'CCA Spark and Hadoop Developer',
    brand: 'Cloudera',
    code: '',
    date: new Date('2020/11/08'),
    image: CCASparkAndHadoopDeveloper
  }
];
export default certifications;

import AzureCosmosSpeciality from "../../../../public/images/certifications/20221028 - Azure Cosmos DB Developer Specialty.png";
import UiPath from "../../../../public/images/certifications/20190607 - RPA Developer Certificate of completion.png";
import Arduino from "../../../../public/images/certifications/20200308 - Arduino Fundamentals.png";
import CCASparkAndHadoopDeveloper from "../../../../public/images/certifications/20201108 - CCA Spark And Hadoop Developer.png";
import OracleJava from "../../../../public/images/certifications/20210426 - Oracle Certified Professional Java SE 11 Developer.png";
import MET from "../../../../public/images/certifications/20201113 - met.png";
import Python from "../../../../public/images/certifications/20210523 - Certified Entry-Level Python Programmer.png";
import { ImageMetadata } from "astro";

export interface Certification {
  code: string;
  name: string;
  brand: string;
  link: string;
  date: Date;
  image: ImageMetadata;
}

const certifications: Certification[] = [
  {
    link: "https://academy.uipath.com/certification",
    name: "RPA Developer Certificate of completion",
    brand: "UiPath",
    code: "",
    date: new Date("2019/06/07"),
    image: UiPath,
  },
  {
    link: "https://certifications-assets-cf.arduino.cc/certificates/a8d0ed84-3a1c-4b71-9985-c44486ac0e28.pdf",
    name: "Arduino Fundamentals",
    brand: "Arduino",
    code: "",
    date: new Date("2020/03/08"),
    image: Arduino,
  },
  {
    link: "",
    name: "CCA Spark and Hadoop Developer",
    brand: "Cloudera",
    code: "",
    date: new Date("2020/11/08"),
    image: CCASparkAndHadoopDeveloper,
  },
  {
    link: "https://www.credly.com/badges/a8fd23c4-72d4-4fd3-85fd-f82584b764b7/public_url",
    name: "B1 MET",
    code: "",
    brand: "MET",
    date: new Date("2020/11/23"),
    image: MET,
  },
  {
    link: "https://www.credly.com/badges/449fcbf9-16c3-4949-a0cb-18d35278a845/public_url",
    name: "Oracle Certified Professional Java SE 11 Developer",
    code: "1Z0-816",
    brand: "Oracle",
    date: new Date("2021/04/26"),
    image: OracleJava,
  },
  {
    link: "https://www.credly.com/badges/3e9780b1-9544-4b8c-834a-87be9e84d24f/public_url",
    name: "Certified Entry-Level Python Programmer",
    code: "PCEP",
    brand: "Python Institute",
    date: new Date("2021/05/23"),
    image: Python,
  },
  

  {
    link: "https://www.credly.com/badges/a8fd23c4-72d4-4fd3-85fd-f82584b764b7/public_url",
    name: "Microsoft Certified: Azure Cosmos DB Developer Specialty",
    code: "DP-420",
    brand: "Microsoft",
    date: new Date("2022/10/28"),
    image: AzureCosmosSpeciality,
  },
];
export default certifications;

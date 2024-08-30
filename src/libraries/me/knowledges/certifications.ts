import { ImageMetadata } from "astro";
import RPADeveloperCertificateOfCompletion from "../../../../public/images/certifications/20190607 - RPA Developer Certificate of completion.png";
import ArduinoFundamentals from "../../../../public/images/certifications/20200308 - Arduino Fundamentals.png";
import CCASparkAndHadoopDeveloper from "../../../../public/images/certifications/20201108 - CCA Spark And Hadoop Developer.png";
import OracleCertifiedProfessionalJavaSE11Developer from "../../../../public/images/certifications/20210426 - Oracle Certified Professional Java SE 11 Developer.png";
import MET from "../../../../public/images/certifications/20201113 - met.png";
import CertifiedEntryLevelPythonProgrammer from "../../../../public/images/certifications/20210523 - Certified Entry-Level Python Programmer.png";
import ScrumFoundationProfessionalCetificateSFPC from "../../../../public/images/certifications/20210612 - Scrum Foundation Professional Cetificate SFPC.png";
import AzureFundamentals from "../../../../public/images/certifications/20210705 - Azure Fundamentals.png";
import RemoteWorkAndVirtualCollaborationProfessionalCertificate from "../../../../public/images/certifications/20210722 - Remote Work and Virtual Collaboration Professional Certificate.png";
import CyberSecurityFoundationProcessionalCertificate from "../../../../public/images/certifications/20210726 - Cyber Security Foundation Processional Certificate.png";
import AzureAIFundamentals from "../../../../public/images/certifications/20210918 - Azure AI Fundamentals.png";
import AzureDataFundamentals from "../../../../public/images/certifications/20211230 - Azure Data Fundamentals.png";
import UFTOneTesterSpecialist from "../../../../public/images/certifications/20220107 - UFT One Tester Specialist.png";
import UFTOneV15CertifiedProfessionalExam from "../../../../public/images/certifications/20220202 - UFT One v15 Certified Professional Exam.png";
import PowerBIDataAnalystAssociate from "../../../../public/images/certifications/20220404 - Power BI Data Analyst Associate.png";
import PowerPlatformFundamentals from "../../../../public/images/certifications/20220428 - Power Platform Fundamentals.png";
import CertifiedKubernetesAdministrator from "../../../../public/images/certifications/20220601 - Certified Kubernetes Administrator.png";
import CertifiedKubernetesApplicationDeveloper from "../../../../public/images/certifications/20220807 - Certified Kubernetes Application Developer.png";
import AzureCosmosSpeciality from "../../../../public/images/certifications/20221028 - Azure Cosmos DB Developer Specialty.png";
import BusinessIntelligenceFoundationProfessionalCertificationBIFPC from "../../../../public/images/certifications/20221216 - Business Intelligence Foundation Professional Certification BIFPC.png";
import TerraformAssociate from "../../../../public/images/certifications/20221218 - Terraform associate.png";
import IBMEnterpriseDesignThinkingPractitioner from "../../../../public/images/certifications/20230102 - IBM - Enterprise Design Thinking Practitioner.png";
import AzureDeveloperAssociate from "../../../../public/images/certifications/20230226 - Azure Developer Associate.png";
import BusinessModelCanvasEssentialsProfessionalCertification from "../../../../public/images/certifications/20230317 - Business Model Canvas Essentials Professional Certification - BMCEPC.png";
import AzureAdministratorAssociate from "../../../../public/images/certifications/20230326 - Azure Administrator Associate.png";
import AzureSolutionsArchitectExpert from "../../../../public/images/certifications/20230604 - Azure Solutions Architect Expert.png";
import DevOpsEngineerExpert from "../../../../public/images/certifications/20230816 - DevOps Engineer Expert.png";
import AzureDataScientistAssociate from "../../../../public/images/certifications/20231002 - Azure Data Scientist Associate.png";
import GraphDeveloperAssociate from "../../../../public/images/certifications/20231210 - Graph Developer - Associate.svg";
import AzureDatabaseAdministratorAssociate from "../../../../public/images/certifications/20231221 - Azure Database Administrator Associate.png";
import AzureDataEngineerAssociate from "../../../../public/images/certifications/20240304 - Azure Data Engineer Associate.png";
import PowerAutomateRPADeveloperAssociate from "../../../../public/images/certifications/20240327 - Power Automate RPA Developer Associate.png";
import AWSCloudPractitioner from "../../../../public/images/certifications/20240504 - AWS Cloud Practitioner.png";
import ConsentExpertRecordIntegrationManagement from "../../../../public/images/certifications/20240716 - Consent Expert Record Integration Management.png";
import DataDiscoveryAndGovernanceEXPERTPrivacyRightsAutomation from "../../../../public/images/certifications/20240814 - Data Discovery and Governance EXPERT Privacy Rights Automation.png";
import PrivacyRightsAutomationExpertWebFormEnhancements from "../../../../public/images/certifications/20240814 - Privacy Rights Automation Expert Web Form Enhancements.png";
import CookieConsentExpertIntegrations from "../../../../public/images/certifications/20240819 - Cookie Consent Expert Integrations.png";
import DataDiscoveryGovernanceProfessionalModuleOverviews from "../../../../public/images/certifications/20240830 - Data Discovery & Governance Professional Module Overviews.png";

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
    image: RPADeveloperCertificateOfCompletion,
  },
  {
    link: "https://certifications-assets-cf.arduino.cc/certificates/a8d0ed84-3a1c-4b71-9985-c44486ac0e28.pdf",
    name: "Arduino Fundamentals",
    brand: "Arduino",
    code: "",
    date: new Date("2020/03/08"),
    image: ArduinoFundamentals,
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
    image: OracleCertifiedProfessionalJavaSE11Developer,
  },
  {
    link: "https://www.credly.com/badges/3e9780b1-9544-4b8c-834a-87be9e84d24f/public_url",
    name: "Certified Entry-Level Python Programmer",
    code: "PCEP",
    brand: "Python Institute",
    date: new Date("2021/05/23"),
    image: CertifiedEntryLevelPythonProgrammer,
  },
  {
    link: "https://www.credly.com/badges/92c3aeff-9784-4560-9c4b-75804aa6ec78/public_url",
    name: "Scrum Foundation Professional Cetificate SFPC",
    code: "",
    brand: "CertiProf",
    date: new Date("2021/06/12"),
    image: ScrumFoundationProfessionalCetificateSFPC,
  },
  {
    link: "https://www.credly.com/badges/470746ff-b66a-4cde-b568-42e344d37e94/public_url",
    name: "Azure Fundamentals",
    code: "AZ-900",
    brand: "Microsoft",
    date: new Date("2021/07/05"),
    image: AzureFundamentals,
  },
  {
    link: "https://www.credly.com/badges/a2bb5a8d-cfe7-4cc5-bb2d-406780f99279/public_url",
    name: "Remote Work and Virtual Collaboration Professional Certificate",
    code: "",
    brand: "Certiprof",
    date: new Date("2021/07/22"),
    image: RemoteWorkAndVirtualCollaborationProfessionalCertificate,
  },
  {
    link: "https://www.credly.com/badges/6a59814c-abd0-4c47-86c3-f1fefaef2abe/public_url",
    name: "Cyber Security Foundation Processional Certificate",
    code: "",
    brand: "Certiprof",
    date: new Date("2021/07/26"),
    image: CyberSecurityFoundationProcessionalCertificate,
  },
  /*
  {
    link: ,
    name: "Cloud Modernization - Cloud Data Quality And Data Governance",
    code: "",
    brand: "Informatica",
    date: new Date("2021/08/28"),
    image: ,
  },
  {
    link: ,
    name: "Data Governance & Privacy Foundation Series Certification",
    code: "",
    brand: "Informatica",
    date: new Date("2021/09/01"),
    image: ,
  },
  {
    link: ,
    name: "Business 360 - Data Management for Supplie & Product",
    code: "",
    brand: "Informatica",
    date: new Date("2021/09/14"),
    image: ,
  },
  */
  {
    link: "https://www.credly.com/badges/a7525a08-aa7f-4417-8456-c5ca6d755dd3/public_url",
    name: "Azure AI Fundamentals",
    code: "AI-900",
    brand: "Microsoft",
    date: new Date("2021/09/18"),
    image: AzureAIFundamentals,
  },
  /*
  {
    link: ,
    name: "ISO 9001 QUALITY MANAGEMENT SKILLFRONT",
    code: "",
    brand: "Skillfront",
    date: new Date("2021/11/13"),
    image: ,
  },
  */
  {
    link: "https://www.credly.com/badges/af2cbe11-7a70-49cd-8bf0-d76ef26bd65f/public_url",
    name: "Azure Data Fundamentals",
    code: "DP-900",
    brand: "Microsoft",
    date: new Date("2021/12/30"),
    image: AzureDataFundamentals,
  },
  {
    link: "https://www.credly.com/badges/7cd68151-60e0-4fcd-b202-25fef4be00af/public_url",
    name: "UFT One Tester Specialist",
    code: "",
    brand: "Microfocus",
    date: new Date("2022/01/07"),
    image: UFTOneTesterSpecialist,
  },
  {
    link: "https://www.credly.com/badges/da71971f-7cac-4955-a137-6cbbe44c9437/public_url",
    name: "UFT One v15 Certified Professional Exam",
    code: "",
    brand: "Microfocus",
    date: new Date("2022/02/02"),
    image: UFTOneV15CertifiedProfessionalExam,
  },
  {
    link: "https://www.credly.com/badges/fd099b10-920a-4092-8b5a-f045f1443cb5/public_url",
    name: "Power BI Data Analyst Associate",
    code: "PL-300",
    brand: "Microsoft",
    date: new Date("2022/04/04"),
    image: PowerBIDataAnalystAssociate,
  },
  {
    link: "https://www.credly.com/badges/380dc1da-b794-4044-97cd-d408ee1015a6/public_url",
    name: "Power Platform Fundamentals",
    code: "PL-900",
    brand: "Microsoft",
    date: new Date("2022/04/28"),
    image: PowerPlatformFundamentals,
  },
  {
    link: "https://www.credly.com/badges/c019816c-4e12-49db-8d7a-82db968e9699/public_url",
    name: "Certified Kubernetes Administrator",
    code: "CKA",
    brand: "Linux Foundation",
    date: new Date("2022/06/01"),
    image: CertifiedKubernetesAdministrator,
  },
  {
    link: "https://www.credly.com/badges/c019816c-4e12-49db-8d7a-82db968e9699/public_url",
    name: "Certified Kubernetes Application Developer",
    code: "CKAD",
    brand: "Linux Foundation",
    date: new Date("2022/08/07"),
    image: CertifiedKubernetesApplicationDeveloper,
  },
  {
    link: "https://www.credly.com/badges/a8fd23c4-72d4-4fd3-85fd-f82584b764b7/public_url",
    name: "Azure Cosmos DB Developer Specialty",
    code: "DP-420",
    brand: "Microsoft",
    date: new Date("2022/10/28"),
    image: AzureCosmosSpeciality,
  },
  {
    link: "https://www.credly.com/badges/6658b32c-ddf5-4c52-ac5b-03e7af939a95/public_url",
    name: "Business Intelligence Foundation Professional Certification BIFPC",
    code: "",
    brand: "Certiprof",
    date: new Date("2022/12/16"),
    image: BusinessIntelligenceFoundationProfessionalCertificationBIFPC,
  },
  {
    link: "https://www.credly.com/badges/6042cc38-1015-4c75-8260-a2a1d100bd00/public_url",
    name: "Terraform Associate",
    code: "HCTAO-002",
    brand: "Hashicorp",
    date: new Date("2022/12/18"),
    image: TerraformAssociate,
  },
  {
    link: "https://www.credly.com/badges/e9815697-e3f4-4056-8ed1-98d7ca6ee1fd/public_url",
    name: "IBM - Enterprise Design Thinking Practitioner",
    code: "",
    brand: "IBM",
    date: new Date("2023/01/02"),
    image: IBMEnterpriseDesignThinkingPractitioner,
  },
  {
    link: "https://www.credly.com/badges/18bf549c-39ae-43b4-830b-eb2a241f9835/public_url",
    name: "Azure Developer Associate",
    code: "AZ-204",
    brand: "Microsoft",
    date: new Date("2023/02/26"),
    image: AzureDeveloperAssociate,
  },
  {
    link: "https://www.credly.com/badges/760a121b-2642-434a-87f9-341fca10192b/public_url",
    name: "Business Model Canvas Essentials Professional Certification - BMCEPC",
    code: "",
    brand: "Certiprof",
    date: new Date("2023/03/17"),
    image: BusinessModelCanvasEssentialsProfessionalCertification,
  },
  {
    link: "https://www.credly.com/badges/4cb7a802-a3c8-4c76-aea0-7f67d9338092/public_url",
    name: "Azure Administrator Associate",
    code: "AZ-104",
    brand: "Microsoft",
    date: new Date("2023/03/26"),
    image: AzureAdministratorAssociate,
  },
  {
    link: "https://www.credly.com/badges/690852a9-8892-4d41-985c-fa9c42e61516/public_url",
    name: "Azure Solutions Architect Expert",
    code: "AZ-305",
    brand: "Microsoft",
    date: new Date("2023/06/04"),
    image: AzureSolutionsArchitectExpert,
  },
  {
    link: "https://learn.microsoft.com/en-us/users/danny270793/credentials/b30ff7171db974de",
    name: "DevOps Engineer Expert",
    code: "AZ-400",
    brand: "Microsoft",
    date: new Date("2023/08/16"),
    image: DevOpsEngineerExpert,
  },
  {
    link: "https://learn.microsoft.com/en-us/users/danny270793/credentials/5b1959ecd5407c03",
    name: "Azure Data Scientist Associate",
    code: "DP-100",
    brand: "Microsoft",
    date: new Date("2023/10/02"),
    image: AzureDataScientistAssociate,
  },
  {
    link: "https://www.apollographql.com/tutorials/certifications/ec329965-9334-4384-a5f7-cb348464c6f9",
    name: "Graph Developer - Associate",
    code: "",
    brand: "Apollo",
    date: new Date("2023/12/10"),
    image: GraphDeveloperAssociate,
  },
  {
    link: "https://learn.microsoft.com/en-us/users/danny270793/credentials/46F92540CBDEC94B",
    name: "Azure Database Administrator Associate",
    code: "DP-300",
    brand: "Microsoft",
    date: new Date("2023/12/21"),
    image: AzureDatabaseAdministratorAssociate,
  },
  {
    link: "https://learn.microsoft.com/en-us/users/danny270793/credentials/1A7FBCA0D918570C",
    name: "Azure Data Engineer Associate",
    code: "DP-203",
    brand: "Microsoft",
    date: new Date("2024/03/04"),
    image: AzureDataEngineerAssociate,
  },
  {
    link: "https://learn.microsoft.com/en-us/users/danny270793/credentials/95faf1625d78d34a",
    name: "Power Automate RPA Developer Associate",
    code: "PL-500",
    brand: "Microsoft",
    date: new Date("2024/03/27"),
    image: PowerAutomateRPADeveloperAssociate,
  },
  {
    link: "https://www.credly.com/badges/39d828a4-c03a-4c2c-9589-623dd662a115/public_url",
    name: "AWS Cloud Practitioner",
    code: "CLF-C02",
    brand: "AWS",
    date: new Date("2024/05/04"),
    image: AWSCloudPractitioner,
  },
  {
    link: "https://www.onetrust.com/certifications/consent-record-integration-and-management-certification",
    name: "Consent Expert Record Integration Management",
    code: "",
    brand: "One Trust",
    date: new Date("2024/07/16"),
    image: ConsentExpertRecordIntegrationManagement,
  },
  {
    link: "https://www.onetrust.com/certifications/data-subject-requests-expert-certification/",
    name: "Privacy Rights Automation Expert Web Form Enhancements",
    code: "",
    brand: "One Trust",
    date: new Date("2024/08/14"),
    image: PrivacyRightsAutomationExpertWebFormEnhancements,
  },
  {
    link: "https://www.onetrust.com/certifications/data-discovery-privacy-rights-automation-certification/",
    name: "Data Discovery and Governance EXPERT Privacy Rights Automation",
    code: "",
    brand: "One Trust",
    date: new Date("2024/08/14"),
    image: DataDiscoveryAndGovernanceEXPERTPrivacyRightsAutomation,
  },
  {
    link: "https://www.onetrust.com/certifications/website-scanning-cookies-consent-expert-certification/",
    name: "Cookie Consent Expert Integrations",
    code: "",
    brand: "One Trust",
    date: new Date("2024/08/19"),
    image: CookieConsentExpertIntegrations,
  },
  {
    link: "https://www.onetrust.com/certifications/data-discovery-and-governance-professional-certification/",
    name: "Data Discovery & Governance Professional Module Overviews",
    code: "",
    brand: "One Trust",
    date: new Date("2024/08/30"),
    image: DataDiscoveryGovernanceProfessionalModuleOverviews,
  },
];
export default certifications;

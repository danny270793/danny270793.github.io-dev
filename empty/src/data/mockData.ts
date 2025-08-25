import type { Education, Certification, OpenSourceLibrary, Project, SocialNetwork, Profile } from '../types';
import i18n from '../i18n';
import profilePicture from "../images/profile.jpg";
import Ecotec from "../images/education/ecotec.png";
import UPS from "../images/education/ups.png";
import Arduino from "../images/libraries/arduino.png";
import CratesIO from "../images/libraries/cratesio.png";
import DokcerHub from "../images/libraries/docker_hub.png";
import Matlab from "../images/libraries/matlab.png";
import Npm from "../images/libraries/npm.png";
import Pip from "../images/libraries/pip.png";
import pubDev from "../images/libraries/pubdev.png";
import MaintAzureMonitoring from "../images/projects/maint azure monitoring.webp";
import Speedometer from "../images/projects/speedometer.webp";
import Soundmeter from "../images/projects/soundmeter.webp";
import Mycompass from "../images/projects/mycompass.webp";
import BoxingTimer from "../images/projects/boxingtimer.png";
import MMAScoreCard from "../images/projects/mmascorecard.png";

export const getProfile = (): Profile => ({
  name: i18n.t('profile.name'),
  title: i18n.t('profile.title'),
  subtitle: i18n.t('profile.subtitle'),
  description: i18n.t('profile.description'),
  avatar: profilePicture,
  location: i18n.t('profile.location'),
  email: "danny270793@gmail.com"
});

export const profile: Profile = getProfile();

export const getEducation = (): Education[] => [
  {
    id: "1",
    avatar: Ecotec,
    title: i18n.t('education.degrees.masters'),
    university: i18n.t('education.universities.ecotec'),
    date: "2020 - 2021"
  },
  {
    id: "2", 
    avatar: UPS,
    title: i18n.t('education.degrees.engineering'),
    university: i18n.t('education.universities.ups'),
    date: "2012 - 2017"
  }
];

export const education: Education[] = getEducation();

export const certifications: Certification[] = [
  {
    id: "1",
    title: "RPA Developer Certificate of completion",
    provider: "UiPath",
    date: "2019",
    image: "/src/images/certifications/20190607 - RPA Developer Certificate of completion.png",
    category: "Automation",
    credentialUrl: "https://academy.uipath.com/certification"
  },
  {
    id: "2",
    title: "Arduino Fundamentals",
    provider: "Arduino",
    date: "2020",
    image: "/src/images/certifications/20200308 - Arduino Fundamentals.png",
    category: "IoT",
    credentialUrl: "https://certifications-assets-cf.arduino.cc/certificates/a8d0ed84-3a1c-4b71-9985-c44486ac0e28.pdf"
  },
  {
    id: "3",
    title: "CCA Spark and Hadoop Developer",
    provider: "Cloudera",
    date: "2020",
    image: "/src/images/certifications/20201108 - CCA Spark And Hadoop Developer.png",
    category: "Data",
    credentialUrl: "https://www.cloudera.com/services-and-support/training/certification/cca-spark.html"
  },
  {
    id: "4",
    title: "B1 MET",
    provider: "MET",
    date: "2020",
    image: "/src/images/certifications/20201113 - met.png",
    category: "Others",
    credentialUrl: "https://michiganassessment.org"
  },
  {
    id: "5",
    title: "Oracle Certified Professional Java SE 11 Developer",
    provider: "Oracle",
    date: "2021",
    image: "/src/images/certifications/20210426 - Oracle Certified Professional Java SE 11 Developer.png",
    category: "Development",
    credentialUrl: "https://www.credly.com/badges/449fcbf9-16c3-4949-a0cb-18d35278a845/public_url"
  },
  {
    id: "6",
    title: "Certified Entry-Level Python Programmer",
    provider: "Python Institute",
    date: "2021",
    image: "/src/images/certifications/20210523 - Certified Entry-Level Python Programmer.png",
    category: "Development",
    credentialUrl: "https://www.credly.com/badges/3e9780b1-9544-4b8c-834a-87be9e84d24f/public_url"
  },
  {
    id: "7",
    title: "Scrum Foundation Professional Certificate SFPC",
    provider: "CertiProf",
    date: "2021",
    image: "/src/images/certifications/20210612 - Scrum Foundation Professional Cetificate SFPC.png",
    category: "Others",
    credentialUrl: "https://www.credly.com/badges/92c3aeff-9784-4560-9c4b-75804aa6ec78/public_url"
  },
  {
    id: "8",
    title: "Azure Fundamentals",
    provider: "Microsoft",
    date: "2021",
    image: "/src/images/certifications/20210705 - Azure Fundamentals.png",
    category: "Cloud",
    credentialUrl: "https://www.credly.com/badges/470746ff-b66a-4cde-b568-42e344d37e94/public_url"
  },
  {
    id: "9",
    title: "Remote Work and Virtual Collaboration Professional Certificate",
    provider: "Certiprof",
    date: "2021",
    image: "/src/images/certifications/20210722 - Remote Work and Virtual Collaboration Professional Certificate.png",
    category: "Others",
    credentialUrl: "https://www.credly.com/badges/a2bb5a8d-cfe7-4cc5-bb2d-406780f99279/public_url"
  },
  {
    id: "10",
    title: "Cyber Security Foundation Professional Certificate",
    provider: "Certiprof",
    date: "2021",
    image: "/src/images/certifications/20210726 - Cyber Security Foundation Processional Certificate.png",
    category: "Others",
    credentialUrl: "https://www.credly.com/badges/6a59814c-abd0-4c47-86c3-f1fefaef2abe/public_url"
  },
  {
    id: "11",
    title: "Azure AI Fundamentals",
    provider: "Microsoft",
    date: "2021",
    image: "/src/images/certifications/20210918 - Azure AI Fundamentals.png",
    category: "AI",
    credentialUrl: "https://www.credly.com/badges/a7525a08-aa7f-4417-8456-c5ca6d755dd3/public_url"
  },
  {
    id: "12",
    title: "Azure Data Fundamentals",
    provider: "Microsoft",
    date: "2021",
    image: "/src/images/certifications/20211230 - Azure Data Fundamentals.png",
    category: "Data",
    credentialUrl: "https://www.credly.com/badges/af2cbe11-7a70-49cd-8bf0-d76ef26bd65f/public_url"
  },
  {
    id: "13",
    title: "UFT One Tester Specialist",
    provider: "Microfocus",
    date: "2022",
    image: "/src/images/certifications/20220107 - UFT One Tester Specialist.png",
    category: "Others",
    credentialUrl: "https://www.credly.com/badges/7cd68151-60e0-4fcd-b202-25fef4be00af/public_url"
  },
  {
    id: "14",
    title: "UFT One v15 Certified Professional Exam",
    provider: "Microfocus",
    date: "2022",
    image: "/src/images/certifications/20220202 - UFT One v15 Certified Professional Exam.png",
    category: "Others",
    credentialUrl: "https://www.credly.com/badges/da71971f-7cac-4955-a137-6cbbe44c9437/public_url"
  },
  {
    id: "15",
    title: "Power BI Data Analyst Associate",
    provider: "Microsoft",
    date: "2022",
    image: "/src/images/certifications/20220404 - Power BI Data Analyst Associate.png",
    category: "Data",
    credentialUrl: "https://www.credly.com/badges/fd099b10-920a-4092-8b5a-f045f1443cb5/public_url"
  },
  {
    id: "16",
    title: "Power Platform Fundamentals",
    provider: "Microsoft",
    date: "2022",
    image: "/src/images/certifications/20220428 - Power Platform Fundamentals.png",
    category: "Automation",
    credentialUrl: "https://www.credly.com/badges/380dc1da-b794-4044-97cd-d408ee1015a6/public_url"
  },
  {
    id: "17",
    title: "Certified Kubernetes Administrator",
    provider: "Linux Foundation",
    date: "2022",
    image: "/src/images/certifications/20220601 - Certified Kubernetes Administrator.png",
    category: "Deployment",
    credentialUrl: "https://www.credly.com/badges/dbae9536-2517-44fa-9e06-5160f6619d25/public_url"
  },
  {
    id: "18",
    title: "Certified Kubernetes Application Developer",
    provider: "Linux Foundation",
    date: "2022",
    image: "/src/images/certifications/20220807 - Certified Kubernetes Application Developer.png",
    category: "Deployment",
    credentialUrl: "https://www.credly.com/badges/c019816c-4e12-49db-8d7a-82db968e9699/public_url"
  },
  {
    id: "19",
    title: "Azure Cosmos DB Developer Specialty",
    provider: "Microsoft",
    date: "2022",
    image: "/src/images/certifications/20221028 - Azure Cosmos DB Developer Specialty.png",
    category: "Data",
    credentialUrl: "https://www.credly.com/badges/a8fd23c4-72d4-4fd3-85fd-f82584b764b7/public_url"
  },
  {
    id: "20",
    title: "Business Intelligence Foundation Professional Certification BIFPC",
    provider: "Certiprof",
    date: "2022",
    image: "/src/images/certifications/20221216 - Business Intelligence Foundation Professional Certification BIFPC.png",
    category: "Others",
    credentialUrl: "https://www.credly.com/badges/6658b32c-ddf5-4c52-ac5b-03e7af939a95/public_url"
  },
  {
    id: "21",
    title: "Terraform Associate",
    provider: "Hashicorp",
    date: "2022",
    image: "/src/images/certifications/20221218 - Terraform associate.png",
    category: "Deployment",
    credentialUrl: "https://www.credly.com/badges/6042cc38-1015-4c75-8260-a2a1d100bd00/public_url"
  },
  {
    id: "22",
    title: "IBM - Enterprise Design Thinking Practitioner",
    provider: "IBM",
    date: "2023",
    image: "/src/images/certifications/20230102 - IBM - Enterprise Design Thinking Practitioner.png",
    category: "Others",
    credentialUrl: "https://www.credly.com/badges/e9815697-e3f4-4056-8ed1-98d7ca6ee1fd/public_url"
  },
  {
    id: "23",
    title: "Azure Developer Associate",
    provider: "Microsoft",
    date: "2023",
    image: "/src/images/certifications/20230226 - Azure Developer Associate.png",
    category: "Development",
    credentialUrl: "https://www.credly.com/badges/18bf549c-39ae-43b4-830b-eb2a241f9835/public_url"
  },
  {
    id: "24",
    title: "Business Model Canvas Essentials Professional Certification - BMCEPC",
    provider: "Certiprof",
    date: "2023",
    image: "/src/images/certifications/20230317 - Business Model Canvas Essentials Professional Certification - BMCEPC.png",
    category: "Others",
    credentialUrl: "https://www.credly.com/badges/760a121b-2642-434a-87f9-341fca10192b/public_url"
  },
  {
    id: "25",
    title: "Azure Administrator Associate",
    provider: "Microsoft",
    date: "2023",
    image: "/src/images/certifications/20230326 - Azure Administrator Associate.png",
    category: "Cloud",
    credentialUrl: "https://www.credly.com/badges/4cb7a802-a3c8-4c76-aea0-7f67d9338092/public_url"
  },
  {
    id: "26",
    title: "Azure Solutions Architect Expert",
    provider: "Microsoft",
    date: "2023",
    image: "/src/images/certifications/20230604 - Azure Solutions Architect Expert.png",
    category: "Cloud",
    credentialUrl: "https://www.credly.com/badges/690852a9-8892-4d41-985c-fa9c42e61516/public_url"
  },
  {
    id: "27",
    title: "DevOps Engineer Expert",
    provider: "Microsoft",
    date: "2023",
    image: "/src/images/certifications/20230816 - DevOps Engineer Expert.png",
    category: "Automation",
    credentialUrl: "https://learn.microsoft.com/en-us/users/danny270793/credentials/b30ff7171db974de"
  },
  {
    id: "28",
    title: "Azure Data Scientist Associate",
    provider: "Microsoft",
    date: "2023",
    image: "/src/images/certifications/20231002 - Azure Data Scientist Associate.png",
    category: "AI",
    credentialUrl: "https://learn.microsoft.com/en-us/users/danny270793/credentials/5b1959ecd5407c03"
  },
  {
    id: "29",
    title: "Graph Developer - Associate",
    provider: "Apollo",
    date: "2023",
    image: "/src/images/certifications/20231210 - Graph Developer - Associate.svg",
    category: "Development",
    credentialUrl: "https://www.apollographql.com/tutorials/certifications/ec329965-9334-4384-a5f7-cb348464c6f9"
  },
  {
    id: "30",
    title: "Azure Database Administrator Associate",
    provider: "Microsoft",
    date: "2023",
    image: "/src/images/certifications/20231221 - Azure Database Administrator Associate.png",
    category: "Data",
    credentialUrl: "https://learn.microsoft.com/en-us/users/danny270793/credentials/46F92540CBDEC94B"
  },
  {
    id: "31",
    title: "Azure Data Engineer Associate",
    provider: "Microsoft",
    date: "2024",
    image: "/src/images/certifications/20240304 - Azure Data Engineer Associate.png",
    category: "Data",
    credentialUrl: "https://learn.microsoft.com/en-us/users/danny270793/credentials/1A7FBCA0D918570C"
  },
  {
    id: "32",
    title: "Power Automate RPA Developer Associate",
    provider: "Microsoft",
    date: "2024",
    image: "/src/images/certifications/20240327 - Power Automate RPA Developer Associate.png",
    category: "Automation",
    credentialUrl: "https://learn.microsoft.com/en-us/users/danny270793/credentials/95faf1625d78d34a"
  },
  {
    id: "33",
    title: "AWS Cloud Practitioner",
    provider: "AWS",
    date: "2024",
    image: "/src/images/certifications/20240504 - AWS Cloud Practitioner.png",
    category: "Cloud",
    credentialUrl: "https://www.credly.com/badges/39d828a4-c03a-4c2c-9589-623dd662a115/public_url"
  },
  {
    id: "34",
    title: "Consent Expert: Record Integration & Management",
    provider: "One Trust",
    date: "2024",
    image: "/src/images/certifications/20240716 - Consent Expert Record Integration Management.png",
    category: "Data Privacy",
    credentialUrl: "https://www.onetrust.com/certifications/consent-record-integration-and-management-certification"
  },
  {
    id: "35",
    title: "Privacy Rights Automation Expert: Web form enhancements",
    provider: "One Trust",
    date: "2024",
    image: "/src/images/certifications/20240814 - Privacy Rights Automation Expert Web Form Enhancements.png",
    category: "Data Privacy",
    credentialUrl: "https://www.onetrust.com/certifications/data-subject-requests-expert-certification/"
  },
  {
    id: "36",
    title: "Data Discovery and Governance EXPERT Privacy Rights Automation",
    provider: "One Trust",
    date: "2024",
    image: "/src/images/certifications/20240814 - Data Discovery and Governance EXPERT Privacy Rights Automation.png",
    category: "Data Privacy",
    credentialUrl: "https://www.onetrust.com/certifications/data-discovery-privacy-rights-automation-certification/"
  },
  {
    id: "37",
    title: "Cookie Consent Expert: Integrations",
    provider: "One Trust",
    date: "2024",
    image: "/src/images/certifications/20240819 - Cookie Consent Expert Integrations.png",
    category: "Data Privacy",
    credentialUrl: "https://www.onetrust.com/certifications/website-scanning-cookies-consent-expert-certification/"
  },
  {
    id: "38",
    title: "Data Discovery & Governance Professional Module Overviews",
    provider: "One Trust",
    date: "2024",
    image: "/src/images/certifications/20240830 - Data Discovery & Governance Professional Module Overviews.png",
    category: "Data Privacy",
    credentialUrl: "https://www.onetrust.com/certifications/data-discovery-and-governance-professional-certification/"
  },
  {
    id: "39",
    title: "Data Discovery & Governance Professional Background",
    provider: "One Trust",
    date: "2024",
    image: "/src/images/certifications/20240903 - Data Discovery & Governance Professional Background.png",
    category: "Data Privacy",
    credentialUrl: "https://www.onetrust.com/certifications/data-discovery-and-governance-professional-certification/"
  },
  {
    id: "40",
    title: "Data Discovery and Governance Data Policies",
    provider: "One Trust",
    date: "2024",
    image: "/src/images/certifications/20240909 - Data Discovery And Governance Data Policies.png",
    category: "Data Privacy",
    credentialUrl: "https://www.onetrust.com/certifications/data-discovery-data-policies-certification/"
  },
  {
    id: "41",
    title: "GitHub Foundation",
    provider: "Github",
    date: "2024",
    image: "/src/images/certifications/20240917 - GitHub Foundations.png",
    category: "Development",
    credentialUrl: "https://www.credly.com/badges/3d39e55e-5b24-4947-9eed-a14e0b5d493a/linked_in_profile"
  },
  {
    id: "42",
    title: "Bot Builder Rocketbot Expert Level 1",
    provider: "RocketBot",
    date: "2024",
    image: "/src/images/certifications/20240920 - Bot Builder Rocketbot Expert Level 1.png",
    category: "Automation",
    credentialUrl: "https://certificate.rocketbot.co/badges/b835748e-d34e-924e-a4d8-9e8ffa7b42b1"
  },
  {
    id: "43",
    title: "Consent & Preferences Management Pro",
    provider: "One Trust",
    date: "2024",
    image: "/src/images/certifications/20240927 - Consent And Preferences Management Pro.png",
    category: "Data Privacy",
    credentialUrl: "https://www.onetrust.com/certifications/consent-preference-management-professional-certification/"
  },
  {
    id: "44",
    title: "Azure Network Engineer Associate",
    provider: "Microsoft",
    date: "2024",
    image: "/src/images/certifications/20241010 - Azure Network Engineer Associate.svg",
    category: "Cloud",
    credentialUrl: "https://learn.microsoft.com/en-us/users/danny270793/credentials/c33ec4db199f5ec2"
  }
];

export const getOpenSourceLibraries = (): OpenSourceLibrary[] => [
  {
    id: "1",
    title: "jmixclientv1",
    description: i18n.t('openSource.libraries.jmixclientv1'),
    logo: pubDev,
    category: "Flutter",
    githubUrl: "https://pub.dev/packages/jmixclientv1"
  },
  {
    id: "2",
    title: "@danny270793/tsframework",
    description: i18n.t('openSource.libraries.tsframework'),
    logo: Npm,
    category: "Node.js",
    npmUrl: "https://www.npmjs.com/package/@danny270793/tsframework"
  },
  {
    id: "3",
    title: "@danny270793/hotreloader",
    description: i18n.t('openSource.libraries.hotreloader'),
    logo: Npm,
    category: "Node.js",
    npmUrl: "https://www.npmjs.com/package/@danny270793/hotreloader"
  },
  {
    id: "4",
    title: "@danny270793/levenshtein",
    description: i18n.t('openSource.libraries.levenshtein'),
    logo: Npm,
    category: "Node.js",
    npmUrl: "https://www.npmjs.com/package/@danny270793/levenshtein"
  },
  {
    id: "5",
    title: "@danny270793/azureservicesclient",
    description: i18n.t('openSource.libraries.azureservicesclient'),
    logo: Npm,
    category: "Node.js",
    npmUrl: "https://www.npmjs.com/package/@danny270793/azureservicesclient"
  },
  {
    id: "6",
    title: "@danny270793/jmixclientv1",
    description: i18n.t('openSource.libraries.jmixclientv1'),
    logo: Npm,
    category: "Node.js",
    npmUrl: "https://www.npmjs.com/package/@danny270793/jmixclientv1"
  },
  {
    id: "7",
    title: "@danny270793/jmixclientv2",
    description: i18n.t('openSource.libraries.jmixclientv2'),
    logo: Npm,
    category: "Node.js",
    npmUrl: "https://www.npmjs.com/package/@danny270793/jmixclientv2"
  },
  {
    id: "8",
    title: "arguments-parser",
    description: i18n.t('openSource.libraries.argumentsParser'),
    logo: Pip,
    category: "Python",
    githubUrl: "https://pypi.org/project/arguments-parser/"
  },
  {
    id: "9",
    title: "fake-http-server",
    description: i18n.t('openSource.libraries.fakeHttpServer'),
    logo: DokcerHub,
    category: "Docker",
    githubUrl: "https://hub.docker.com/r/danny27071993/fake-http-server"
  },
  {
    id: "10",
    title: "sqlserver",
    description: i18n.t('openSource.libraries.sqlserver'),
    logo: DokcerHub,
    category: "Docker",
    githubUrl: "https://hub.docker.com/r/danny27071993/sqlserver"
  },
  {
    id: "11",
    title: "ansible",
    description: i18n.t('openSource.libraries.ansible'),
    logo: DokcerHub,
    category: "Docker",
    githubUrl: "https://hub.docker.com/r/danny27071993/ansible"
  },
  {
    id: "12",
    title: "terraform-azure",
    description: i18n.t('openSource.libraries.terraformAzure'),
    logo: DokcerHub,
    category: "Docker",
    githubUrl: "https://hub.docker.com/r/danny27071993/terraform-azure"
  },
  {
    id: "13",
    title: "ShiftRegister",
    description: i18n.t('openSource.libraries.shiftRegister'),
    logo: Arduino,
    category: "Arduino",
    githubUrl: "https://github.com/danny270793/ArduinoShiftRegister"
  },
  {
    id: "14",
    title: "code-metadata",
    description: i18n.t('openSource.libraries.codeMetadata'),
    logo: CratesIO,
    category: "Rust",
    githubUrl: "https://crates.io/crates/code-metadata"
  },
  {
    id: "15",
    title: "PortCom",
    description: i18n.t('openSource.libraries.portCom'),
    logo: Matlab,
    category: "Matlab",
    githubUrl: "https://github.com/danny270793/MatlabPortCom"
  }
];

export const openSourceLibraries: OpenSourceLibrary[] = getOpenSourceLibraries();

export const getProjects = (): Project[] => [
  {
    id: "1",
    name: i18n.t('projects.items.maintAzureMonitoring.name'),
    description: i18n.t('projects.items.maintAzureMonitoring.description'),
    icon: MaintAzureMonitoring,
    technologies: ["Flutter", "Dart", "Azure API"],
    playstoreUrl: "https://play.google.com/store/apps/details?id=com.maintlatam.azure.pipelinesmonitoring.pipelines_monitoring",
    category: "Mobile"
  },
  {
    id: "2",
    name: i18n.t('projects.items.speedometer.name'),
    description: i18n.t('projects.items.speedometer.description'),
    icon: Speedometer,
    technologies: ["Flutter", "Dart", "GPS"],
    playstoreUrl: "https://play.google.com/store/apps/details?id=io.github.danny270793.sppedometer",
    githubUrl: "https://github.com/danny270793/Speedometer",
    category: "Mobile"
  },
  {
    id: "3",
    name: i18n.t('projects.items.soundmeter.name'),
    description: i18n.t('projects.items.soundmeter.description'),
    icon: Soundmeter,
    technologies: ["Flutter", "Dart", "Audio Processing"],
    playstoreUrl: "https://play.google.com/store/apps/details?id=io.github.danny270793.soundmeter.soundmeter",
    githubUrl: "https://github.com/danny270793/SoundMeter",
    category: "Mobile"
  },
  {
    id: "4",
    name: i18n.t('projects.items.mycompass.name'),
    description: i18n.t('projects.items.mycompass.description'),
    icon: Mycompass,
    technologies: ["Flutter", "Dart", "Sensors"],
    playstoreUrl: "https://play.google.com/store/apps/details?id=io.github.danny270793.mycompass",
    githubUrl: "https://github.com/danny270793/MyCompass",
    category: "Mobile"
  },
  {
    id: "5",
    name: i18n.t('projects.items.boxingTimer.name'),
    description: i18n.t('projects.items.boxingTimer.description'),
    icon: BoxingTimer,
    technologies: ["Flutter", "Dart", "Timers"],
    playstoreUrl: "https://play.google.com/store/apps/details?id=io.github.danny270793.boxingtimer",
    githubUrl: "https://github.com/danny270793/Boxing-Timer",
    category: "Mobile"
  },
  {
    id: "6",
    name: i18n.t('projects.items.mmaScoreCard.name'),
    description: i18n.t('projects.items.mmaScoreCard.description'),
    icon: MMAScoreCard,
    technologies: ["Flutter", "Dart", "API Integration"],
    playstoreUrl: "https://play.google.com/store/apps/details?id=io.github.danny270793.mmascorecard",
    githubUrl: "https://github.com/danny270793/MMAScoreCard",
    category: "Mobile"
  }
];

export const projects: Project[] = getProjects();

export const socialNetworks: SocialNetwork[] = [
  {
    id: "1",
    name: "GitHub",
    url: "https://www.github.com/danny270793",
    icon: "fab fa-github",
    username: "danny270793"
  },
  {
    id: "2",
    name: "LinkedIn",
    url: "tps://www.linkedin.com/in/danny270793",
    icon: "fab fa-linkedin",
    username: "danny270793"
  },
  {
    id: "3",
    name: "Youtube",
    url: "https://www.youtube.com/@DannyVacaO",
    icon: "fab fa-youtube",
    username: "DannyVacaO"
  },
];

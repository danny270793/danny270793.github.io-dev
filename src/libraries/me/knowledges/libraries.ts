import Arduino from "../../../../public/images/libraries/arduino.png";
import CratesIO from "../../../../public/images/libraries/cratesio.png";
import DokcerHub from "../../../../public/images/libraries/docker_hub.png";
import Matlab from "../../../../public/images/libraries/matlab.png";
import Npm from "../../../../public/images/libraries/npm.png";
import Pip from "../../../../public/images/libraries/pip.png";
import pubDev from "../../../../public/images/libraries/pubdev.png";
import { ImageMetadata } from "astro";

export interface Library {
  image: ImageMetadata;
  name: string;
  description: string;
  link: string;
}

const libraries: Library[] = [
  {
    image: pubDev,
    name: "jmixclientv1",
    description: "Library to connect with jmix v1.x rest api",
    link: "https://pub.dev/packages/jmixclientv1",
  },
  {
    image: Npm,
    name: "@danny270793/tsframework",
    description: "REST Framework for education purposes",
    link: "https://www.npmjs.com/package/@danny270793/tsframework",
  },
  {
    image: Npm,
    name: "@danny270793/hotreloader",
    description: "Re-executes a command when a file changes on specific folder",
    link: "https://www.npmjs.com/package/@danny270793/hotreloader",
  },
  {
    image: Npm,
    name: "@danny270793/levenshtein",
    description: "Computes levenshtein distance to find matchs between strings",
    link: "https://www.npmjs.com/package/@danny270793/levenshtein",
  },
  {
    image: Npm,
    name: "@danny270793/azureservicesclient",
    description:
      "Library to connect and get metadata from Azure resources like synapse, storage accounts, etc",
    link: "https://www.npmjs.com/package/@danny270793/azureservicesclient",
  },
  {
    image: Npm,
    name: "@danny270793/jmixclientv1",
    description: "Library to connect with jmix v1.x rest api",
    link: "https://www.npmjs.com/package/@danny270793/jmixclientv1",
  },
  {
    image: Npm,
    name: "@danny270793/jmixclientv2",
    description: "Library to connect with jmix v2.x rest api",
    link: "https://www.npmjs.com/package/@danny270793/jmixclientv2",
  },
  {
    image: Pip,
    name: "arguments-parser",
    description: "Library to parse cmd arguments",
    link: "https://pypi.org/project/arguments-parser/",
  },
  {
    image: DokcerHub,
    name: "fake-http-server",
    description:
      "Fake http server wich returns the hostname of the running machine and the node name shared via environment variables",
    link: "https://hub.docker.com/r/danny27071993/fake-http-server",
  },
  {
    image: DokcerHub,
    name: "sqlserver",
    description:
      "Create sqlserver container with a database just passing the database name as parameter without the need of any external script",
    link: "https://hub.docker.com/r/danny27071993/sqlserver",
  },
  {
    image: DokcerHub,
    name: "ansible",
    description: "Docker image with ansible pre-installed for ci purposes",
    link: "https://hub.docker.com/r/danny27071993/ansible",
  },
  {
    image: DokcerHub,
    name: "terraform-azure",
    description: "Docker image with azure cli pre-installed for ci purposes",
    link: "https://hub.docker.com/r/danny27071993/terraform-azure",
  },
  {
    image: Arduino,
    name: "ShiftRegister",
    description:
      "Library to convert decimal numbers to binary and write out over shift registers",
    link: "https://github.com/danny270793/ArduinoShiftRegister",
  },
  {
    image: CratesIO,
    name: "code-metadata",
    description:
      "Computes the metada of the projects: files by extention, lines by extention, average lines per file",
    link: "https://crates.io/crates/code-metadata",
  },
  {
    image: Matlab,
    name: "PortCom",
    description: "Library to read and plot data from serial port using Matlab",
    link: "https://github.com/danny270793/MatlabPortCom",
  },
];
export default libraries;

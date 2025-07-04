import Arduino from "../../../images/libraries/arduino.png";
import CratesIO from "../../../images/libraries/cratesio.png";
import DokcerHub from "../../../images/libraries/docker_hub.png";
import Matlab from "../../../images/libraries/matlab.png";
import Npm from "../../../images/libraries/npm.png";
import Pip from "../../../images/libraries/pip.png";
import pubDev from "../../../images/libraries/pubdev.png";
import type { ImageMetadata } from "astro";

export interface Library {
  image: ImageMetadata;
  type:
    | "Flutter"
    | "Node"
    | "Python"
    | "DockerHub"
    | "Arduino"
    | "Rust"
    | "Matlab";
  name: string;
  description: string;
  link: string;
}

const libraries: Library[] = [
  {
    image: pubDev,
    type: "Flutter",
    name: "jmixclientv1",
    description: "Library to connect with jmix v1.x rest api",
    link: "https://pub.dev/packages/jmixclientv1",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/tsframework",
    description: "REST Framework for education purposes",
    link: "https://www.npmjs.com/package/@danny270793/tsframework",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/hotreloader",
    description: "Re-executes a command when a file changes on specific folder",
    link: "https://www.npmjs.com/package/@danny270793/hotreloader",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/levenshtein",
    description: "Computes levenshtein distance to find matchs between strings",
    link: "https://www.npmjs.com/package/@danny270793/levenshtein",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/azureservicesclient",
    description:
      "Library to connect and get metadata from Azure resources like synapse, storage accounts, etc",
    link: "https://www.npmjs.com/package/@danny270793/azureservicesclient",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/jmixclientv1",
    description: "Library to connect with jmix v1.x rest api",
    link: "https://www.npmjs.com/package/@danny270793/jmixclientv1",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/jmixclientv2",
    description: "Library to connect with jmix v2.x rest api",
    link: "https://www.npmjs.com/package/@danny270793/jmixclientv2",
  },
  {
    image: Pip,
    type: "Python",
    name: "arguments-parser",
    description: "Library to parse cmd arguments",
    link: "https://pypi.org/project/arguments-parser/",
  },
  {
    image: DokcerHub,
    type: "DockerHub",
    name: "fake-http-server",
    description:
      "Fake http server wich returns the hostname of the running machine and the node name shared via environment variables",
    link: "https://hub.docker.com/r/danny27071993/fake-http-server",
  },
  {
    image: DokcerHub,
    type: "DockerHub",
    name: "sqlserver",
    description:
      "Create sqlserver container with a database just passing the database name as parameter without the need of any external script",
    link: "https://hub.docker.com/r/danny27071993/sqlserver",
  },
  {
    image: DokcerHub,
    type: "DockerHub",
    name: "ansible",
    description: "Docker image with ansible pre-installed for ci purposes",
    link: "https://hub.docker.com/r/danny27071993/ansible",
  },
  {
    image: DokcerHub,
    type: "DockerHub",
    name: "terraform-azure",
    description: "Docker image with azure cli pre-installed for ci purposes",
    link: "https://hub.docker.com/r/danny27071993/terraform-azure",
  },
  {
    image: Arduino,
    type: "Arduino",
    name: "ShiftRegister",
    description:
      "Library to convert decimal numbers to binary and write out over shift registers",
    link: "https://github.com/danny270793/ArduinoShiftRegister",
  },
  {
    image: CratesIO,
    type: "Rust",
    name: "code-metadata",
    description:
      "Computes the metada of the projects: files by extention, lines by extention, average lines per file",
    link: "https://crates.io/crates/code-metadata",
  },
  {
    image: Matlab,
    type: "Matlab",
    name: "PortCom",
    description: "Library to read and plot data from serial port using Matlab",
    link: "https://github.com/danny270793/MatlabPortCom",
  },
];
export default libraries;

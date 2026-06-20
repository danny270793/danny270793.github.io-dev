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
  description: { en: string; es: string };
  link: string;
}

const libraries: Library[] = [
  {
    image: pubDev,
    type: "Flutter",
    name: "jmixclientv1",
    description: {
      en: "Library to connect with jmix v1.x rest api",
      es: "Librería para conectarse con la API REST de jmix v1.x",
    },
    link: "https://pub.dev/packages/jmixclientv1",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/tsframework",
    description: {
      en: "REST Framework for education purposes",
      es: "Framework REST para propósitos educativos",
    },
    link: "https://www.npmjs.com/package/@danny270793/tsframework",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/hotreloader",
    description: {
      en: "Re-executes a command when a file changes on specific folder",
      es: "Vuelve a ejecutar un comando cuando un archivo cambia en una carpeta específica",
    },
    link: "https://www.npmjs.com/package/@danny270793/hotreloader",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/levenshtein",
    description: {
      en: "Computes levenshtein distance to find matches between strings",
      es: "Calcula la distancia de Levenshtein para encontrar coincidencias entre cadenas",
    },
    link: "https://www.npmjs.com/package/@danny270793/levenshtein",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/azureservicesclient",
    description: {
      en: "Library to connect and get metadata from Azure resources like synapse, storage accounts, etc",
      es: "Librería para conectarse y obtener metadatos de recursos de Azure como Synapse, cuentas de almacenamiento, etc.",
    },
    link: "https://www.npmjs.com/package/@danny270793/azureservicesclient",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/jmixclientv1",
    description: {
      en: "Library to connect with jmix v1.x rest api",
      es: "Librería para conectarse con la API REST de jmix v1.x",
    },
    link: "https://www.npmjs.com/package/@danny270793/jmixclientv1",
  },
  {
    image: Npm,
    type: "Node",
    name: "@danny270793/jmixclientv2",
    description: {
      en: "Library to connect with jmix v2.x rest api",
      es: "Librería para conectarse con la API REST de jmix v2.x",
    },
    link: "https://www.npmjs.com/package/@danny270793/jmixclientv2",
  },
  {
    image: Pip,
    type: "Python",
    name: "arguments-parser",
    description: {
      en: "Library to parse cmd arguments",
      es: "Librería para analizar argumentos de línea de comandos",
    },
    link: "https://pypi.org/project/arguments-parser/",
  },
  {
    image: DokcerHub,
    type: "DockerHub",
    name: "fake-http-server",
    description: {
      en: "Fake http server which returns the hostname of the running machine and the node name shared via environment variables",
      es: "Servidor HTTP falso que retorna el nombre del host de la máquina en ejecución y el nombre del nodo compartido mediante variables de entorno",
    },
    link: "https://hub.docker.com/r/danny27071993/fake-http-server",
  },
  {
    image: DokcerHub,
    type: "DockerHub",
    name: "sqlserver",
    description: {
      en: "Create sqlserver container with a database just passing the database name as parameter without the need of any external script",
      es: "Crea un contenedor de SQL Server con una base de datos pasando solo el nombre de la base de datos como parámetro, sin necesidad de scripts externos",
    },
    link: "https://hub.docker.com/r/danny27071993/sqlserver",
  },
  {
    image: DokcerHub,
    type: "DockerHub",
    name: "ansible",
    description: {
      en: "Docker image with ansible pre-installed for ci purposes",
      es: "Imagen Docker con Ansible preinstalado para propósitos de CI",
    },
    link: "https://hub.docker.com/r/danny27071993/ansible",
  },
  {
    image: DokcerHub,
    type: "DockerHub",
    name: "terraform-azure",
    description: {
      en: "Docker image with azure cli pre-installed for ci purposes",
      es: "Imagen Docker con Azure CLI preinstalado para propósitos de CI",
    },
    link: "https://hub.docker.com/r/danny27071993/terraform-azure",
  },
  {
    image: Arduino,
    type: "Arduino",
    name: "ShiftRegister",
    description: {
      en: "Library to convert decimal numbers to binary and write out over shift registers",
      es: "Librería para convertir números decimales a binario y escribirlos en registros de desplazamiento",
    },
    link: "https://github.com/danny270793/ArduinoShiftRegister",
  },
  {
    image: CratesIO,
    type: "Rust",
    name: "code-metadata",
    description: {
      en: "Computes the metadata of the projects: files by extension, lines by extension, average lines per file",
      es: "Calcula los metadatos de los proyectos: archivos por extensión, líneas por extensión, promedio de líneas por archivo",
    },
    link: "https://crates.io/crates/code-metadata",
  },
  {
    image: Matlab,
    type: "Matlab",
    name: "PortCom",
    description: {
      en: "Library to read and plot data from serial port using Matlab",
      es: "Librería para leer y graficar datos desde el puerto serial usando Matlab",
    },
    link: "https://github.com/danny270793/MatlabPortCom",
  },
];
export default libraries;

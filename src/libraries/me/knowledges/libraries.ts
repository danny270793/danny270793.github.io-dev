export interface Library {
  language: "dart" | "npm" | "python" | "docker" | "arduino";
  name: string;
  description: string;
  link: string;
}

const libraries: Library[] = [
  {
    language: "dart",
    name: "jmixclientv1",
    description: "Library to connect with jmix v1.x rest api",
    link: "https://pub.dev/packages/jmixclientv1",
  },
  {
    language: "npm",
    name: "@danny270793/tsframework",
    description: "REST Framework for education purposes",
    link: "https://www.npmjs.com/package/@danny270793/tsframework",
  },
  {
    language: "npm",
    name: "@danny270793/hotreloader",
    description: "Re-executes a command when a file changes on specific folder",
    link: "https://www.npmjs.com/package/@danny270793/hotreloader",
  },
  {
    language: "npm",
    name: "@danny270793/levenshtein",
    description: "Computes levenshtein distance to find matchs between strings",
    link: "https://www.npmjs.com/package/@danny270793/levenshtein",
  },
  {
    language: "npm",
    name: "@danny270793/azureservicesclient",
    description:
      "Library to connect and get metadata from Azure resources like synapse, storage accounts, etc",
    link: "https://www.npmjs.com/package/@danny270793/azureservicesclient",
  },
  {
    language: "npm",
    name: "@danny270793/jmixclientv1",
    description: "Library to connect with jmix v1.x rest api",
    link: "https://www.npmjs.com/package/@danny270793/jmixclientv1",
  },
  {
    language: "npm",
    name: "@danny270793/jmixclientv2",
    description: "Library to connect with jmix v2.x rest api",
    link: "https://www.npmjs.com/package/@danny270793/jmixclientv2",
  },
  {
    language: "python",
    name: "arguments-parser",
    description: "Library to parse cmd arguments",
    link: "https://pypi.org/project/arguments-parser/",
  },
  {
    language: "docker",
    name: "fake-http-server",
    description:
      "Fake http server wich returns the hostname of the running machine and the node name shared via environment variables",
    link: "https://hub.docker.com/r/danny27071993/fake-http-server",
  },
  {
    language: "docker",
    name: "sqlserver",
    description:
      "Create sqlserver container with a database just passing the database name as parameter without the need of any external script",
    link: "https://hub.docker.com/r/danny27071993/sqlserver",
  },
  {
    language: "docker",
    name: "ansible",
    description: "Docker image with ansible pre-installed for ci purposes",
    link: "https://hub.docker.com/r/danny27071993/ansible",
  },
  {
    language: "docker",
    name: "terraform-azure",
    description: "Docker image with azure cli pre-installed for ci purposes",
    link: "https://hub.docker.com/r/danny27071993/terraform-azure",
  },
  {
    language: "arduino",
    name: "ShiftRegister",
    description:
      "Library to convert decimal numbers to binary and write out over shift registers",
    link: "https://github.com/danny270793/ArduinoShiftRegister",
  },
];
export default libraries;

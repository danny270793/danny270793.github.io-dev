export interface Technology {
  link: string;
  alternative: string;
  category:
    | "Mobile"
    | "Web"
    | "CI"
    | "Deployments"
    | "Monitoring"
    | "Databases"
    | "BigData"
    | "Microcontrollers";
}
const technologies: Technology[] = [
  {
    category: "Mobile",
    link: "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white",
    alternative: "Flutter",
  },
  {
    category: "Mobile",
    link: "https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white",
    alternative: "Electron",
  },
  {
    category: "Mobile",
    link: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
    alternative: "Android",
  },
  {
    category: "Mobile",
    link: "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
    alternative: "Swift",
  },
  {
    category: "Mobile",
    link: "https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white",
    alternative: "Kotlin",
  },
  {
    category: "Mobile",
    link: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    alternative: "React Native",
  },
  {
    category: "Mobile",
    link: "https://img.shields.io/badge/capacitor-%23119EFF.svg?style=for-the-badge&logo=capacitor&logoColor=white",
    alternative: "Capacitor",
  },
  {
    category: "Mobile",
    link: "https://img.shields.io/badge/cordova-%23000000.svg?style=for-the-badge&logo=apachecordova",
    alternative: "Cordova",
  },

  {
    category: "Web",
    link: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    alternative: "React",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
    alternative: "Vuejs",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white",
    alternative: "Astro",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    alternative: "NextJS",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
    alternative: "Angular",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
    alternative: "Laravel",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
    alternative: "Flask",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    alternative: "Django",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
    alternative: ".Net",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
    alternative: "Spring",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/springboot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white",
    alternative: "Spring boot",
  },
  {
    category: "Web",
    link: "https://img.shields.io/badge/nodejs-%235FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white",
    alternative: "NodeJS",
  },
  {
    category: "CI",
    link: "https://img.shields.io/badge/gitlab%20ci-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white",
    alternative: "Gitlab",
  },
  {
    category: "CI",
    link: "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=github&logoColor=white",
    alternative: "Github",
  },
  {
    category: "CI",
    link: "https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD",
    alternative: "SonarQube",
  },
  {
    category: "CI",
    link: "https://img.shields.io/badge/azure_devops-%230072C6.svg?style=for-the-badge&logo=azure&logoColor=white",
    alternative: "Azure DevOps",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white",
    alternative: "Kubernetes",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/rancher-%230075A8.svg?style=for-the-badge&logo=rancher&logoColor=white",
    alternative: "Rancher",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
    alternative: "Docker",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    alternative: "AWS",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    alternative: "Firebase",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
    alternative: "Supabase",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    alternative: "Azure",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
    alternative: "Vercel",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white",
    alternative: "Digital Ocean",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
    alternative: "Google Cloud",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white",
    alternative: "Terraform",
  },
  {
    category: "Deployments",
    link: "https://img.shields.io/badge/vagrant-%231563FF.svg?style=for-the-badge&logo=vagrant&logoColor=white",
    alternative: "Vagrant",
  },
  {
    category: "Monitoring",
    link: "https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white",
    alternative: "Prometheus",
  },
  {
    category: "Monitoring",
    link: "https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white",
    alternative: "Grafana",
  },
  {
    category: "Monitoring",
    link: "https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch",
    alternative: "ElasticSearch",
  },
  {
    category: "Monitoring",
    link: "https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black",
    alternative: "Power BI",
  },
  {
    category: "Databases",
    link: "https://img.shields.io/badge/SQLServer-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white",
    alternative: "SQLServer",
  },
  {
    category: "Databases",
    link: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    alternative: "Postgres",
  },
  {
    category: "Databases",
    link: "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white",
    alternative: "MariaDB",
  },
  {
    category: "Databases",
    link: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    alternative: "MongoDB",
  },
  {
    category: "Databases",
    link: "https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white",
    alternative: "Neo4J",
  },
  {
    category: "Databases",
    link: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
    alternative: "Redis",
  },
  {
    category: "Databases",
    link: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
    alternative: "SQLite",
  },
  {
    category: "Databases",
    link: "https://img.shields.io/badge/rabbitmq-FF6600.svg?style=for-the-badge&logo=rabbitmq&logoColor=white",
    alternative: "RabbitMQ",
  },
  {
    category: "BigData",
    link: "https://img.shields.io/badge/Spark-FDEE21?style=for-the-badge&logo=apachespark&logoColor=black",
    alternative: "Spark",
  },
  {
    category: "BigData",
    link: "https://img.shields.io/badge/Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black",
    alternative: "Hadoop",
  },
  {
    category: "BigData",
    link: "https://img.shields.io/badge/Hive-FDEE21?style=for-the-badge&logo=apachehive&logoColor=black",
    alternative: "Hive",
  },
  {
    category: "BigData",
    link: "https://img.shields.io/badge/Nifi-728E9B?style=for-the-badge&logo=apachenifi&logoColor=white",
    alternative: "Nifi",
  },
  {
    category: "BigData",
    link: "https://img.shields.io/badge/Hbase-BE160C?style=for-the-badge&logo=apachehbase&logoColor=white",
    alternative: "HBase",
  },
  {
    category: "Microcontrollers",
    link: "https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi",
    alternative: "RaspberryPi",
  },
  {
    category: "Microcontrollers",
    link: "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
    alternative: "Arduino",
  },
  {
    category: "Microcontrollers",
    link: "https://img.shields.io/badge/nodered-%238F0000.svg?style=for-the-badge&logo=nodered&logoColor=white",
    alternative: "NodeRED",
  },
];
export default technologies;

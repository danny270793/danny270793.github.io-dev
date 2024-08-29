export interface Project {
  type: "mobile";
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    type: "mobile",
    name: "Sppedometer",
    description: "App to measure the speed which the device is moving on",
    link: "https://play.google.com/store/apps/details?id=io.github.danny270793.sppedometer",
  },
  {
    type: "mobile",
    name: "Soundmeter",
    description:
      "App to measure the strengh of the noise which is reaching your phone microphone",
    link: "https://play.google.com/store/apps/details?id=io.github.danny270793.soundmeter.soundmeter",
  },
  {
    type: "mobile",
    name: "Mycompass",
    description: "App to measure the orientation of the device",
    link: "https://play.google.com/store/apps/details?id=io.github.danny270793.mycompass",
  },
  {
    type: "mobile",
    name: "Maint Azure Monitoring",
    description: "App get insights (prices, ussage) from azure accout",
    link: "https://play.google.com/store/apps/details?id=com.maintlatam.azure.pipelinesmonitoring.pipelines_monitoring",
  },
];
export default projects;

export interface Project {
  type: "playstore";
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    type: "playstore",
    name: "Sppedometer",
    description: "App to measure the speed which the device is moving on",
    link: "https://play.google.com/store/apps/details?id=io.github.danny270793.sppedometer",
  },
  {
    type: "playstore",
    name: "Soundmeter",
    description:
      "App to measure the strengh of the noise which is reaching your phone microphone",
    link: "https://play.google.com/store/apps/details?id=io.github.danny270793.soundmeter.soundmeter",
  },
  {
    type: "playstore",
    name: "Mycompass",
    description: "App to measure the orientation of the device",
    link: "https://play.google.com/store/apps/details?id=io.github.danny270793.mycompass",
  },
  {
    type: "playstore",
    name: "Maint Azure Monitoring",
    description: "App get insights (prices, ussage) from azure accout",
    link: "https://play.google.com/store/apps/details?id=com.maintlatam.azure.pipelinesmonitoring.pipelines_monitoring",
  },
];
export default projects;

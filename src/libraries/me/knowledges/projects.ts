export interface Project {
  name: string;
  description: string;
  playstore: string|undefined;
  appstore: string|undefined;
}

const projects: Project[] = [
  {
    name: "Sppedometer",
    description: "App to measure the speed which the device is moving on",
    playstore: "https://play.google.com/store/apps/details?id=io.github.danny270793.sppedometer",
    appstore: undefined
  },
  {
    name: "Soundmeter",
    description:
      "App to measure the strengh of the noise which is reaching your phone microphone",
      playstore: "https://play.google.com/store/apps/details?id=io.github.danny270793.soundmeter.soundmeter",
    appstore: undefined
  },
  {
    name: "Mycompass",
    description: "App to measure the orientation of the device",
    playstore: "https://play.google.com/store/apps/details?id=io.github.danny270793.mycompass",
    appstore: undefined
  },
  {
    name: "Maint Azure Monitoring",
    description: "App get insights (prices, ussage) from azure accout",
    playstore: "https://play.google.com/store/apps/details?id=com.maintlatam.azure.pipelinesmonitoring.pipelines_monitoring",
    appstore: undefined
  },
];
export default projects;

import Speedometer from "../../../../public/images/projects/speedometer.webp";
import Soundmeter from "../../../../public/images/projects/soundmeter.webp";
import Mycompass from "../../../../public/images/projects/mycompass.webp";
import MaintAzureMonitoring from "../../../../public/images/projects/maint azure monitoring.webp";
import { ImageMetadata } from "astro";

export interface Project {
  image: ImageMetadata;
  name: string;
  description: string;
  playstore: string | undefined;
  appstore: string | undefined;
}

const projects: Project[] = [
  {
    image: MaintAzureMonitoring,
    name: "Maint Azure Monitoring",
    description: "App get insights (prices, ussage) from azure accout",
    playstore:
      "https://play.google.com/store/apps/details?id=com.maintlatam.azure.pipelinesmonitoring.pipelines_monitoring",
    appstore: undefined,
  },
  {
    image: Speedometer,
    name: "Sppedometer",
    description: "App to measure the speed which the device is moving on",
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.sppedometer",
    appstore: undefined,
  },
  {
    image: Soundmeter,
    name: "Soundmeter",
    description:
      "App to measure the strengh of the noise which is reaching your phone microphone",
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.soundmeter.soundmeter",
    appstore: undefined,
  },
  {
    image: Mycompass,
    name: "Mycompass",
    description: "App to measure the orientation of the device",
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.mycompass",
    appstore: undefined,
  },
];
export default projects;

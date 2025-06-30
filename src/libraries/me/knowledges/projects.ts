import Speedometer from "../../../images/projects/speedometer.webp";
import Soundmeter from "../../../images/projects/soundmeter.webp";
import Mycompass from "../../../images/projects/mycompass.webp";
import MaintAzureMonitoring from "../../../images/projects/maint azure monitoring.webp";
import BoxingTimer from "../../../images/projects/boxingtimer.png"
import type { ImageMetadata } from "astro";

export interface Project {
  image: ImageMetadata;
  name: string;
  description: string;
  playstore: string | undefined;
  appstore: string | undefined;
  github: string | undefined;
}

const projects: Project[] = [
  {
    image: MaintAzureMonitoring,
    name: "Maint Azure Monitoring",
    description: "App get insights (prices, ussage) from azure accout",
    playstore:
      "https://play.google.com/store/apps/details?id=com.maintlatam.azure.pipelinesmonitoring.pipelines_monitoring",
    appstore: undefined,
    github: undefined,
  },
  {
    image: Speedometer,
    name: "Speedometer",
    description: "App to measure the speed which the device is moving on",
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.sppedometer",
    appstore: undefined,
    github: 'https://github.com/danny270793/Speedometer',
  },
  {
    image: Soundmeter,
    name: "Soundmeter",
    description:
      "App to measure the strengh of the noise which is reaching your phone microphone",
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.soundmeter.soundmeter",
    appstore: undefined,
    github: "https://github.com/danny270793/SoundMeter",
  },
  {
    image: Mycompass,
    name: "Mycompass",
    description: "App to measure the orientation of the device",
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.mycompass",
    appstore: undefined,
    github: "https://github.com/danny270793/MyCompass",
  },
  {
    image: BoxingTimer,
    name: "Boxing Timer",
    description: "A app that shows a timer for each round of your boxing training",
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.boxingtimer",
    appstore: undefined,
    github: "https://github.com/danny270793/Boxing-Timer",
  },
];
export default projects;

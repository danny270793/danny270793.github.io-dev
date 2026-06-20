import Speedometer from "../../../images/projects/speedometer.webp";
import Soundmeter from "../../../images/projects/soundmeter.webp";
import Mycompass from "../../../images/projects/mycompass.webp";
import MaintAzureMonitoring from "../../../images/projects/maint azure monitoring.webp";
import BoxingTimer from "../../../images/projects/boxingtimer.png";
import MMAScoreCard from "../../../images/projects/mmascorecard.png";
import type { ImageMetadata } from "astro";

export interface Project {
  image: ImageMetadata;
  name: string;
  description: { en: string; es: string };
  playstore: string | undefined;
  appstore: string | undefined;
  github: string | undefined;
}

const projects: Project[] = [
  {
    image: MaintAzureMonitoring,
    name: "Maint Azure Monitoring",
    description: {
      en: "App to get insights (prices, usage) from azure account",
      es: "Aplicación para obtener información (precios, uso) de una cuenta de Azure",
    },
    playstore:
      "https://play.google.com/store/apps/details?id=com.maintlatam.azure.pipelinesmonitoring.pipelines_monitoring",
    appstore: undefined,
    github: undefined,
  },
  {
    image: Speedometer,
    name: "Speedometer",
    description: {
      en: "App to measure the speed which the device is moving on",
      es: "Aplicación para medir la velocidad a la que se mueve el dispositivo",
    },
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.sppedometer",
    appstore: undefined,
    github: "https://github.com/danny270793/Speedometer",
  },
  {
    image: Soundmeter,
    name: "Soundmeter",
    description: {
      en: "App to measure the strength of the noise which is reaching your phone microphone",
      es: "Aplicación para medir la intensidad del ruido que llega al micrófono de tu teléfono",
    },
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.soundmeter.soundmeter",
    appstore: undefined,
    github: "https://github.com/danny270793/SoundMeter",
  },
  {
    image: Mycompass,
    name: "Mycompass",
    description: {
      en: "App to measure the orientation of the device",
      es: "Aplicación para medir la orientación del dispositivo",
    },
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.mycompass",
    appstore: undefined,
    github: "https://github.com/danny270793/MyCompass",
  },
  {
    image: BoxingTimer,
    name: "Boxing Timer",
    description: {
      en: "App that shows a timer for each round of your boxing training",
      es: "Aplicación que muestra un temporizador para cada round de tu entrenamiento de boxeo",
    },
    playstore:
      "https://play.google.com/store/apps/details?id=io.github.danny270793.boxingtimer",
    appstore: undefined,
    github: "https://github.com/danny270793/Boxing-Timer",
  },
  {
    image: MMAScoreCard,
    name: "MMA ScoreCard",
    description: {
      en: "An independent app to see MMA events and results",
      es: "Aplicación independiente para ver eventos y resultados de MMA",
    },
    playstore: undefined,
    appstore: undefined,
    github: "https://github.com/danny270793/MMAScoreCard",
  },
];
export default projects;

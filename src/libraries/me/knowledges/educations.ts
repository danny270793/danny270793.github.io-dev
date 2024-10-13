import Ecotec from "../../../images/education/ecotec.png";
import UPS from "../../..//images/education/ups.png";
import Rohde from "../../../images/education/rohde.png";
import { ImageMetadata } from "astro";

export interface Education {
  image: ImageMetadata;
  name: string;
  institution: string;
  from: number;
  to: number;
}

const education: Education[] = [
  {
    image: Ecotec,
    name: "Máster en sistemas de información con mención en inteligencia de negocios",
    institution: "Universidad Tecnológica Ecotec",
    from: 2020,
    to: 2021,
  },
  {
    image: UPS,
    name: "Ingeniero Electrónico con mención en telecomunicaciones",
    institution: "Universidad Politécnica Salesiana",
    from: 2012,
    to: 2017,
  },
  /*{
    image: Rohde,
    name: "Bachiller técnico en ciencias Fisicomatemáticas",
    institution: "Guillermo Rohde Arosemena",
    from: 2007,
    to: 2012,
  },*/
];
export default education;

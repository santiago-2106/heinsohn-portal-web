import { softwareCards } from "../data/dataCard";
import SliderSolDigital from "./SliderSolDigital";


export default function CardSwiper() {
  return (
    <div>
        <SliderSolDigital title="Productos relacionados" cards={softwareCards} />      
    </div>
  )
}

import { softwareCards } from "../data/DataTI";
import SliderSolDigital from "./SliderSolDigital";


export default function CardSwiper() {
  return (
    <div>
        <SliderSolDigital title="Productos relacionados" cards={softwareCards} />      
    </div>
  )
}

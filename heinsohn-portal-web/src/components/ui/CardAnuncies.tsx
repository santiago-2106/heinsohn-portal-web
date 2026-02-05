import Card from "./Card"
import DevicesIcon from '@mui/icons-material/Devices';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';


const serviciosCards = [
    {icon:<DevicesIcon />, title: 'Desarrollo de aplicaciones moviles y web', description:'soluciones intuitivas para todo tip de dispositivos', btn:'ver soluciones'},
    {icon:<DisplaySettingsIcon />, title: 'Diseño y Desarrollo UX/UI', description:'interfaces centradas en el usuario, pensadas para mejorar la experiencia y la conversion', btn:'Ver experiencias'},
    {icon:<DataObjectIcon />, title: 'Desarollo de software', description:'productos a la medida de cada necesidad empresarial', btn:'Solicitar desarrollo'},
    {icon:<CloudQueueIcon />, title: 'Desarrollo software cloud', description:'aplicaciones seguras, flexibles y con alto rendimiento en la nube.', btn:'Ver mas'},
    {icon:<TabletMacIcon/>, title: 'Desarrollo de plataformas escalables', description:'arquitecturas prepardas para el crecimiento del negocio', btn:'Explorar'},
    {icon:<DeveloperModeIcon />, title: 'Modernizacion de aplicaciones de software', description:'actualizacion tecnologica que prolonga la vida util y aumenta la eficiencia', btn:'Actualizar ahora'},
    
]


const analisisCard = [
  {title: 'Bussines Intelligence', description:'Impulsa tu crecimiento con soluciones de BI que ofrecen visualizaciones claras y análisis predictivos.', btn:'ver BI'},
  {title: 'Consultoria IA', description:'Asesoramiento experto para integrar la inteligencia artificial en tu estrategia de negocio.', btn:'Conocer mas'},
  {title: 'Soluciones de Inteligencia Artificial y Copilot', description:'Soluciones de IA y Copilot que potencian la eficiencia y la automatización inteligente.', btn:'Ver soluciones IA'},
  {title: 'Machine Learnign e Inteligencia Artificial', description:'Algoritmos predictivos que convierten datos en insights para optimizar procesos empresariales..', btn:'Explorar IA'},
]


export default function CardAnuncies() {
  return (
    <section className='bg-white py-8 sm:py-12 md:py-16'>
      <div  className='mx-auto max-w-7xl px-4 sm:px-6 md:-px-8 lg:px-12 xl:px-48 '>
        <div className='mb-8 sm:mb-10 md:mb-12 text-center'>
            <p className='text-3xl sm:text-3xl md:text-4xl px-4'>Ingenieria de software y Desarrollo de productos Digitales</p>
        </div>
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2'>
            {
                serviciosCards.map((cards, index) => (
                    <Card key={index} icon={cards.icon} title={cards.title} description={cards.description} btn={cards.btn} />
                ))
            }
        </section>

        {/*<div className="mb-28 sm:mb-10 md:mb-12 text-center">
          <h3 className="text-3xl sm:text-3xl md:text-4xl px-4">Analitica de datos e inteligencia artificial</h3>
        </div>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2">
          { REVISAR QUE LOGICA MANEJAR PARA EL RESTO DE CARDS
            analisisCard.map((card, i) => (
              <Card key={i} title={card.title} description={card.description} btn={card.btn}  />
            ))
          }
        </section>*/}
      </div>
    </section>
  )
}

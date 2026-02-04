import Card from "./Card"




const serviciosCards = [
    {title: 'Desarrollo de aplicaciones moviles y web', description:'soluciones intuitivas para todo tip de dispositivos', btn:'ver soluciones'},
    {title: 'Diseño y Desarrollo UX/UI', description:'interfaces centradas en el usuario, pensadas para mejorar la experiencia y la conversion', btn:'Ver experiencias'},
    {title: 'Desarollo de software', description:'productos a la medida de cada necesidad empresarial', btn:'Solicitar desarrollo'},
    {title: 'Desarrollo software cloud', description:'aplicaciones seguras, flexibles y con alto rendimiento en la nube.', btn:'Ver mas'},
    {title: 'Desarrollo de plataformas escalables', description:'arquitecturas prepardas para el crecimiento del negocio', btn:'Explorar'},
    {title: 'Modernizacion de aplicaciones de software', description:'actualizacion tecnologica que prolonga la vida util y aumenta la eficiencia', btn:'Actualizar ahora'},
    
]


export default function CardAnuncies() {
  return (
    <section className='bg-white py-16'>
      <div  className='mx-auto max-w-7xl px-48'>
        <div className='mb-12 text-center'>
            <p className='text-3xl md:text-4xl'>Ingenieria de software y Desarrollo de productos Digitales</p>
        </div>
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2'>
            {
                serviciosCards.map((cards, index) => (
                    <Card key={index} title={cards.title} description={cards.description} btn={cards.btn} />
                ))
            }
        </section>
      </div>
    </section>
  )
}

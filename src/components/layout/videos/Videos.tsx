import { PlayCircleOutlineOutlined, PlayCircleOutlineRounded } from '@mui/icons-material'
import Image from 'next/image'

interface propsVideos {
    imgVideos:string;
    textVideos:string;
    textButtonVideo:string;
}

export default function Videos({ imgVideos, textVideos, textButtonVideo }: propsVideos) {
  return (
    <div>
       <section>
            <article className="mt-10 mb-10 w-full max-w-4xl mx-auto px-4">
                <div className="relative mt-12 overflow-hidden cursor-pointer group">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={imgVideos}
                      alt="IA en Recursos Humanos"
                      fill
                      className="object-cover brightness-50 grayscale-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-brand-accent opacity-90 group-hover:scale-110 transition-transform duration-300">
                        <PlayCircleOutlineOutlined sx={{ fontSize: 80 }}/>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black text-bg-main py-12 px-6 text-center">
                    <p className="text-lg md:text-xl font-light mb-4 opacity-80 text-text-body">
                      {textVideos}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:underline decoration-brand-accent underline-offset-4"
                    >
                      <PlayCircleOutlineRounded sx={{ fontSize: 20, color: 'red' }}/>
                      <span className="uppercase tracking-widest text-text-body">{textButtonVideo}</span>
                    </a>
                  </div>
                </div>
              </article>
            </section>
    </div>
  )
}

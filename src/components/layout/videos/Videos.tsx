"use client"
import { PlayCircleOutlineOutlined, PlayCircleOutlineRounded } from '@mui/icons-material'
import Image from 'next/image'
import { useState } from 'react';
import VideoModal from '../../ui/modal/VideoModal';


interface propsVideos {
  video: {
    title: string;
    description: string;
    youtubeId: string;
    thumbnail: string;
  };
  textVideos: string;
  textButtonVideo: string;
}

export default function Videos({ video, textVideos, textButtonVideo }: propsVideos) {
  const [videoId, setVideoId] = useState<string | null>(null);
  return (
    <div>
       <section>
            <article className="mt-10 mb-10 w-full max-w-4xl mx-auto px-4">
                <div
                onClick={() => setVideoId(video.youtubeId)}
                className="relative mt-12 overflow-hidden cursor-pointer group"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover brightness-50 grayscale group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-brand-accent opacity-90 group-hover:scale-110 transition-transform duration-300">
                        <PlayCircleOutlineOutlined sx={{ fontSize: 80 }} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-text-title py-12 px-6 text-center">
                    <p className="text-lg md:text-xl font-light mb-4 opacity-80 text-white">
                      {textVideos}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold hover:underline decoration-brand-accent underline-offset-4 text-white">
                      <PlayCircleOutlineRounded sx={{ fontSize: 20, color:"red" }} />
                    <span className="uppercase tracking-widest">
                      {textButtonVideo}
                    </span>
                    </span>
                  </div>
                </div>
            </article>
        </section>
          <VideoModal videoId={videoId} onClose={() => setVideoId(null)}/>
    </div>
  )
}

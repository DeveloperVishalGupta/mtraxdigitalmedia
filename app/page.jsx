import { Snippet } from '@heroui/snippet';
import { Code } from '@heroui/code';
import { title } from '../components/primitives';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { top6Musics } from '../constant';

export default function Home() {
  return (
    <section className="">
       <div className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* 🔸 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/recordingStudio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔸 Overlay (optional, for contrast) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        {/* 🔸 Content */}
        <div className="relative border-2 p-10 md:py-16 rounded-2xl dark:bg-neutral-800/55 bg-white/15 z-20 text-center mx-4 sm:mx-0 sm:w-3/4 md:w-7/12
         flex flex-col items-center justify-center text-white px-4">
          <div className="flex flex-col gap-4">
            <h1 style={{lineHeight:1.15}} id="musicCareer" className={`${title({ size: 'xl' })}  leading-loose`}>
              <span className='dark:text-darkThemePrimaryText text-lightThemePrimaryText'>MTrax</span> {' '}
              <span className='dark:text-darkThemeSecondryText text-darkThemeSecondryText'>Digital Media</span>, a leading platform for CMS & Music Distribution
            </h1>
          </div>
          <p className="text-2xl max-w-2xl leading-10 mt-12 font-semibold dark:text-neutral-200 text-neutral-200">
          MTrax Digital Media Pvt Ltd provides broad range of services from YouTube CMS to Music distribution on all major OTT platforms.
          </p>
        </div>
      </div>
      <div className='px-24 py-20'>
         <h1 id="musicCareer" className={`${title({ size: 'lg' })} my-12 `}>
             Overviews
        </h1>
        <div className='grid grid-cols-3 py-16 gap-12'>
          {top6Musics.map((item) => {
            return (
              <div key={item.link} className='border h-72 rounded-xl overflow-hidden border-neutral-400'>

            <iframe
              className='w-full h-full'
              src={item.link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
                />

            
          </div>
           )
         })}
          </div>
      </div>
    </section>
  );
}

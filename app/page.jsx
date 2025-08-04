import { title } from '../components/primitives';
import { top6Musics } from '../constant';
import { TextOnGlass } from '../components/TextOnGlass';

export default function Home() {
  return (
    <section className="">
      <div className="relative h-[calc(100vh-4rem)]  flex items-center justify-center overflow-hidden">
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
        <TextOnGlass
          primaryPoint={'MTrax Digital Media'}
          heading={', a leading platform for CMS & Music Distribution'}
          detail={
            'MTrax Digital Media Pvt Ltd provides broad range of services from YouTube CMS to Music distribution on all major OTT platforms.'
          }
        />
      </div>
      <div className=" px-4 md:px-24 py-10 md:py-20">
        <h1 id="musicCareer" className={`${title({ size: 'lg' })} my-12 `}>
          Overviews
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 py-16 gap-4 md:gap-12">
          {top6Musics.map((item) => {
            return (
              <div
                key={item.link}
                className="border h-72 rounded-xl overflow-hidden border-neutral-400"
              >
                <iframe
                  className="w-full h-full"
                  src={item.link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';
import { title } from '../../components/primitives';
import { musicPlatforms } from '../../constant';
import singer from '../../assets/images/singer.jpg';
import { HoverEffect } from '../../components/ui/card-hover-effect';

import {
  FaceBook,
  Instagram,
  Spotify,
  Ticktock,
  YouTube,
} from '../../assets/brand-Icons';
import Discribe from '../../components/discribe';
import { VideoPromoCard } from '../../components/VideoPromoCard';

export default function DistributeMusic() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-center h-[calc(100vh-6.625rem)] flex-col items-center ">
        <div className="flex flex-col gap-4">
          <h1 className={title({ size: 'xl' })}>Distribute your music </h1>
          <h1 className={`${title({ size: 'xl' })} text-orange-400`}>
            Everywhere
          </h1>
        </div>
        <p className="text-2xl max-w-2xl leading-10 mt-24 font-semibold dark:text-neutral-400 text-neutral-500">
          You create your best music, and we will distribute it across the best
          platforms in the world.
        </p>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-2 justify-center mb-8">
          <h1 className={`${title()} `}>Digital plateforms for</h1>

          <h1 className={`${title()} text-orange-400`}>your music</h1>
        </div>
        {console.log(musicPlatforms)}

        <HoverEffect items={musicPlatforms} page={'distribution'} />
      </div>
      <div className="  px-4 sm:px-0">
        <VideoPromoCard
          image={singer}
          heading={
            <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
              Your Official Music Video{' '}
              <span className="text-orange-400">Release Partner</span>
            </h1>
          }
          details={`Launch your official music videos in style. We help you quickly
                get your music videos live on the most popular social platforms
                and earn royalties. We have you covered from setup and launch to
                video uploads and rights management.`}
          showPlateforms
        />
      </div>

      <div className="h-[calc(100vh-6.625rem)] px-4 flex justify-center items-start flex-col">
        <div className="flex flex-col gap-5 items-center mx-auto justify-center mb-8">
          <h1 className={`${title()} `}>
            Promote Your Music in All Major{' '}
            <span className={`sm:hidden leading-relaxed text-orange-400`}>
              Social Media Channels
            </span>
          </h1>
          <h1 className={`${title()} text-orange-400 hidden md:block`}>
            Social Media Channels
          </h1>
        </div>
        <p className="text-2xl leading-10 mt-18 font-medium dark:text-neutral-400 text-neutral-500">
          Distribute your music to the world's most popular and biggest social
          media platforms effortlessly with HarDan Music Group, and manage your
          royalties and rights hassle-free. So create your free account today,
          and let's rock and roll!
        </p>
        <div className="socialmedia flex justify-around flex-wrap items-center gap-8 px-4 sm:px-0 sm:w-1/2 mx-auto  mt-12 icons">
          <Instagram />
          <FaceBook />
          <Ticktock />
          <Spotify />
          <YouTube />
        </div>
      </div>

      <div className="px-4 sm:px-0">
        <Discribe />
      </div>
    </div>
  );
}

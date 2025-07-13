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
import { PageHeroSection } from '../../components/TextOnGlass';

export default function DistributeMusic() {
  return (
    <div className="flex flex-col gap-20">
      <PageHeroSection
        detail={
          ' You create your best music, and we will distribute it across the best platforms in the world'
        }
        heading={'Distribute your music Everywhere'}
      />
      <div className="lg:px-28">
        <div className="">
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-8">
            <h1 className={`${title()} `}>Digital platforms for</h1>

            <h1
              className={`${title()} text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
            >
              your music
            </h1>
          </div>
          <HoverEffect items={musicPlatforms} page={'distribution'} />
        </div>
        <div className="  px-4 sm:px-0">
          <VideoPromoCard
            image={singer}
            heading={
              <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
                Your Official Music{' '}
                <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                  Release Partner
                </span>
              </h1>
            }
            details={`Launch your official music in style. We help you quickly
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
              <span
                className={`sm:hidden leading-relaxed text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
              >
                Social Media Channels
              </span>
            </h1>
            <h1
              className={`${title()} text-lightThemePrimaryText dark:text-darkThemePrimaryText hidden md:block`}
            >
              Social Media Channels
            </h1>
          </div>
          <p className="text-2xl leading-10 mt-18 font-medium dark:text-neutral-400 text-neutral-500">
            Distribute your music to the world's most popular and biggest social
            media platforms effortlessly with us, and manage your royalties and
            rights hassle-free. So Contact us today, and let's rock and roll!
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
    </div>
  );
}

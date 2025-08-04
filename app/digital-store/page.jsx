import { title } from '../../components/primitives';
import { HoverEffect } from '../../components/ui/card-hover-effect';
import { musicPlatforms } from '../../constant';
import singer from '../../assets/images/singer.jpg';
import {
  FaceBook,
  Instagram,
  Spotify,
  Ticktock,
  YouTube,
} from '../../assets/brand-Icons';
import Discribe from '../../components/discribe';
import { VideoPromoCard } from '../../components/VideoPromoCard';
import { HeroSectionTemp } from '../../components/heroSectionTemp';

export default function DigitalStorePage() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <HeroSectionTemp
          heading={
            <div className="flex flex-col gap-4">
              <h1
                className={`${title({ size: 'xl' })} text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
              >
                MTrax Digital Media Group -
              </h1>
              <h1 className={title({ size: 'xl' })}>
                {' '}
                Music Distribute Partners{' '}
              </h1>
            </div>
          }
          details={
            'Get your music out to the Best, Biggest, and Most popular platforms around the world.'
          }
        />
      </div>

      <div>
        <div className="flex gap-2 flex-col sm:flex-row justify-center mb-8">
          <h1 className={`${title()} `}>Digital plateforms for</h1>

          <h1
            className={`${title()} text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
          >
            your music
          </h1>
        </div>

        <HoverEffect items={musicPlatforms} page={'distribution'} />
      </div>
      <div className=" px-4 sm:px-0 ">
        <VideoPromoCard
          image={singer}
          heading={
            <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
              Your Official Music Video{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                Release Partner
              </span>
            </h1>
          }
          details={`Launch your official music videos in style. We help you quickly
                get your music videos live on the most popular social platforms
                and earn royalties. We have you covered from setup and launch to
                video uploads and rights management.`}
          showPlateforms
        />
      </div>

      <div className="md:h-[calc(100vh-6.625rem)] flex justify-center items-start flex-col">
        <div className="flex flex-col gap-5 items-center mx-auto justify-center mb-8">
          <h1 className={`${title()} `}>Promote Your Music in All Major</h1>
          <h1
            className={`${title()} text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
          >
            Social Media Channels
          </h1>
        </div>
        <p className="text-2xl leading-10 mt-18 font-medium dark:text-neutral-400 text-neutral-500">
          Distribute your music to the world's most popular and biggest social
          media platforms effortlessly with us, and manage your royalties and
          rights hassle-free. So Contact us today, and let's rock and roll!
        </p>
        <div className="socialmedia flex justify-around items-center gap-8 flex-wrap px-4 sm:px-0 sm:w-1/2 mx-auto  mt-12 icons">
          <Instagram />
          <FaceBook />
          <Ticktock />
          <Spotify />
          <YouTube />
        </div>
      </div>

      <div className="px-4 sm:px-0 mb-12 sm:mb-0">
        <Discribe />
      </div>
    </div>
  );
}

'use client';
import Image from 'next/image';
import { Amazon, Spotify, YouTube } from '../assets/brand-Icons';
import { title } from './primitives';

export function VideoPromoCard({
  image,
  video,
  heading,
  details,
  showPlateforms = false,
}) {
  return (
    <div className="dark:border-white border-gray-400 border-2 grid grid-cols-7 rounded-2xl overflow-hidden ">
      <div className="col-span-3">
        {video && (
          <video className="w-full h-full " autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {image && (
          <Image
            alt="HeroUI hero Image"
            isZoomed
            src={image}
            className="!rounded-none "
          />
        )}
      </div>
      <div className="flex justify-center items-center col-span-4">
        <div className="px-12 py-8 flex flex-col gap-5">
          {heading}
          <p className="text-lg font-semibold dark:text-white text-gray-500">
            {details}
          </p>
          {showPlateforms && (
            <div className="flex flex-wrap  mt-5 justify-around items-center">
              <div className="flex gap-1 items-center">
                <YouTube />
                <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
                  YouTube
                </h1>
              </div>
              <div className="flex gap-1 items-center">
                <Amazon />
                <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
                  Amazon
                </h1>
              </div>
              <div className="flex gap-1 items-center">
                <Spotify />
                <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
                  Spotify
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

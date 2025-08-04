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
    <div className="dark:border-neutral-400 border-gray-400 border-2 grid grid-cols-7 rounded-2xl overflow-hidden ">
      <div className="col-span-full sm:col-span-3">
        {video && (
          <video className="w-full h-full " autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {image && (
          <Image
            alt="HeroUI hero Image"
            src={image}
            className="!rounded-none "
          />
        )}
      </div>
      <div className="flex  justify-center items-center col-span-full sm:col-span-4">
        <div className="px-4 sm:px-12 py-8 flex flex-col gap-5">
          {heading}
          <p className="text-lg font-medium md:font-semibold dark:text-neutral-400 text-gray-500">
            {details}
          </p>
          {showPlateforms && (
            <div className="sm:flex flex-wrap  mt-5 justify-around items-center">
              {['YouTube', 'Amazon', 'Spotify'].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex mb-4 sm:mb-0 justify-center sm:justify-start gap-3 sm:gap-1 items-center"
                  >
                    {item === 'YouTube' ? (
                      <YouTube />
                    ) : item === 'Amazon' ? (
                      <Amazon />
                    ) : (
                      <Spotify />
                    )}
                    <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
                      {item}
                    </h1>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';
import { title } from '../../components/primitives';
import { musicPlatforms, whatOffers } from '../../constant';
import singer from '../../assets/images/singer.jpg';
import { HoverEffect } from '../../components/ui/card-hover-effect';

import {
  FaceBook,
  Instagram,
  Spotify,
  Ticktock,
  YouTube,
} from '../../assets/brand-Icons';
import { VideoPromoCard } from '../../components/VideoPromoCard';
import { PageHeroSection } from '../../components/TextOnGlass';

export default function AboutPage() {
  return (
    <div className="">
      <div className="mb-20">
        <PageHeroSection
          detail={
            'At MTrax Digital Media, we are more than just a music distribution company — we are your partner in turning sound into success.'
          }
          heading={'Empowering Artists. Distributing Dreams.'}
        />
      </div>
      <div className="flex flex-col gap-20  lg:px-28">
        <div className="text-2xl w-4/5 leading-10  mx-auto   font-semibold dark:text-neutral-300 text-neutral-600">
          <p className="mt-16">
            With a deep passion for music and a strong grasp of the digital
            landscape, we specialize in distributing your music across all major
            streaming platforms, including Spotify, Apple Music, YouTube Music,
            Amazon, and more.
          </p>
          <p className="mt-16">
            Our mission is to bridge the gap between independent artists and a
            global audience. Whether you're an emerging artist or an established
            label, we provide seamless, reliable, and transparent distribution
            services designed to elevate your reach and revenue.
          </p>
        </div>

        <div className="">
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-8">
            <h1 className={`${title()} `}>What We Offer:</h1>

            <h1
              className={`${title()} text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
            >
              your music
            </h1>
          </div>
          <HoverEffect items={whatOffers} page={'distribution'} showIcons />
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

        <div className=" md:h-[calc(100vh-6.625rem)] px-4 flex justify-center items-start flex-col">
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
            With a growing network of artists, producers, and labels, we take
            pride in helping music creators thrive in the digital age. At MTrax
            Digital Media, your sound matters — and we make sure the world hears
            it.
          </p>
          <div className="socialmedia flex justify-around flex-wrap items-center gap-8 px-4 sm:px-0 sm:w-1/2 mx-auto  mt-12 icons">
            <Instagram />
            <FaceBook />
            <Ticktock />
            <Spotify />
            <YouTube />
          </div>
          <h1
            className={`${title({ size: 'sm' })} mt-20 text-lightThemeSecondryText dark:text-darkThemeSecondryText hidden md:block`}
          >
            Join the movement. Distribute with confidence. Grow with us.
          </h1>
        </div>
      </div>
    </div>
  );
}

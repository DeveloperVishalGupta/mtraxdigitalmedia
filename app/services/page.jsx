'use client';
import { title } from '../../components/primitives';
import { otherServises, reasonsToChoose, service } from '../../constant';
import worldwideDistributionServiceImage from '../../assets/images/services-1.jpg';
import musicPublishingServiceImage from '../../assets/images/services-2.jpg';
import youTubeMonetizationServiceImage from '../../assets/images/services-3.jpg';
import ManagemenmServiceImage from '../../assets/images/services-4.png';
import { CircleCheck } from '../../assets/icons/icons';
import { Image } from '@heroui/image';

export default function ServicesPage() {
  const servicesImage = {
    'Worldwide Music distribution and streaming':
      worldwideDistributionServiceImage,
    'Music Publishing Worldwide': musicPublishingServiceImage,
    'YouTube Channel Monetization and CMS Services':
      youTubeMonetizationServiceImage,
    'Copyright Management': ManagemenmServiceImage,
  };
  return (
    <div className="flex flex-col gap-20">
      <div className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* 🔸 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/DJ.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔸 Overlay (optional, for contrast) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        {/* 🔸 Content */}
        <div className="relative border p-10 rounded-2xl dark:bg-neutral-800/50 bg-white/15 z-20 text-center mx-4 sm:mx-0 sm:w-3/4 md:w-7/12 flex flex-col items-center justify-center text-white px-4">
          <div className="flex flex-col gap-4">
            <h1 id="musicCareer" className={`${title({ size: 'xl' })}  `}>
              MTrax Digital Media, the best platform to grow your{' '}
              <span className="text-lightThemePrimaryText dark:text-darkThemePrimaryText">
                Music Career
              </span>
            </h1>
          </div>
          <p className="text-2xl max-w-2xl leading-10 mt-12 font-semibold dark:text-neutral-200 text-neutral-200">
            If you are an artist/publisher/music company owner and think YouTube
            Channel management and Music Distribution  a big deal, feel
            free to contact Us.
          </p>
        </div>
      </div>

      <div className="gap-20 flex flex-col lg:px-14 xl:px-24">
        {service.map((item, index) => {
          const splitTitle = item.title.split(' ');

          return (
            <div key={index} className="px-4 sm:px-0">
              <h1
                className={`${title()} flex capitalize flex-wrap justify-center w-3/4 mx-auto`}
              >
                {splitTitle.map((item, index) => {
                  const isLast = index === splitTitle.length - 1;
                  return (
                    <span
                      key={index}
                      className={`${isLast ? 'text-lightThemePrimaryText dark:text-darkThemePrimaryText' : ''} flex  justify-center leading-normal`}
                    >
                      {item}&nbsp;
                    </span>
                  );
                })}
              </h1>
              <div className="my-12 grid grid-cols-7  gap-10 ">
                <div
                  className={`${item.imageOrder === 1 ? 'sm:order-1' : 'sm:order-2'} col-span-full sm:col-span-3 `}
                >
                  <div className="rounded-2xl bg-orange-500 p-2">
                    <Image
                      className="rounded-xl shadow-sm"
                      isZoomed
                      alt={item.title}
                      src={servicesImage[item.title].src}
                    />
                  </div>
                </div>
                <div
                  className={`${item.imageOrder !== 1 ? 'order-1' : 'order-2'} col-span-full sm:col-span-4 flex items-start gap-5 justify-center flex-col `}
                >
                  {item.details.map((detailItem, detailIndex) => {
                    return (
                      <div key={detailIndex} className="flex gap-3 capitalize justify-start tracking-wide text-xl font-normal text-start  items-center">
                        <span className="">
                          <CircleCheck size={28} />
                        </span>
                        <span className="">{detailItem}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ms:mb-0 mb-12">
        <div className="flex flex-col gap-2 justify-center mb-8">
          <h1 className={`${title()} leading-normal capitalize`}>
            More Reasons to Choose{' '}
            <span
              className={`text-lightThemePrimaryText dark:text-darkThemePrimaryText`}
            >
              MTrax Digital Media
            </span>
          </h1>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 sm:px-0 px-4 sm:gap-5 pt-5 gap-y-5 sm:gap-y-12 lg:px-36">
            {reasonsToChoose.map((item, index) => {
              return (
                <div key={index} className="text-start  sm:w-4/5 shadow-lg p-4 rounded-xl dark:border-neutral-600 dark:border-2 border mx-auto">
                  <h1
                    className={`${title({ size: 'sm' })} capitalize font-semibold mb-4 text-lightThemePrimaryText dark:text-darkThemePrimaryText  `}
                  >
                    {item.title}
                  </h1>
                  <p className="text-lg mt-4 font-semibold capitalize dark:text-white text-gray-500">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

       <div className="ms:mb-0 mb-12">
        <div className="flex flex-col gap-2 justify-center mb-8">
          <h1 className={`${title()} leading-normal capitalize`}>
            Other Servises

          </h1>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 sm:px-0 px-4 sm:gap-5 pt-5 gap-y-5 sm:gap-y-12 lg:px-36">
            {otherServises.map((item, index) => {
              return (
                <div key={index} className="text-start  sm:w-4/5 shadow-lg p-4 rounded-xl dark:border-neutral-600 dark:border-2 border mx-auto">
                  <h1
                    className={`text-2xl capitalize font-semibold mb-4`}
                  >
                    {item.title}
                  </h1>
                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

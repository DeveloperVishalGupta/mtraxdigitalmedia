'use client';
import { title } from '../../components/primitives';
import { reasonsToChoose, service } from '../../constant';
import worldwideDistributionServiceImage from '../../assets/images/services-1.jpg';
import musicPublishingServiceImage from '../../assets/images/services-2.jpg';
import youTubeMonetizationServiceImage from '../../assets/images/services-3.jpg';
import ManagemenmServiceImage from '../../assets/images/services-4.jpg';
import { CircleCheck } from '../../assets/icons/icons';
import { Image } from '@heroui/image';

export default function ServicesPage() {
  const servicesImage = {
    'worldwide distribution': worldwideDistributionServiceImage,
    'Global Music Publishing': musicPublishingServiceImage,
    'YouTube Monetization': youTubeMonetizationServiceImage,
    'Rights Management': ManagemenmServiceImage,
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
        <div className="relative border p-10 rounded-2xl dark:bg-neutral-800/50 bg-white/15 z-20 text-center mx-4 sm:mx-0 sm:w-3/4 flex flex-col items-center justify-center text-white px-4">
          <div className="flex flex-col gap-4">
            <h1 className={title({ size: 'xl' })}>
              The Right Place to Push Your{' '}
              <span className="text-orange-400">Music Career</span> Beyond
              Limits
            </h1>
          </div>
          <p className="text-2xl max-w-2xl leading-10 mt-12 font-semibold dark:text-neutral-200 text-neutral-200">
            Register an account with us today and take the musician in you to
            new heights.
          </p>
        </div>
      </div>

      <div className="gap-20 flex flex-col">
        {service.map((item, index) => {
          console.log(item.title);
          const splitTitle = item.title.split(' ');
          console.log(splitTitle);

          return (
            <div className="px-4 sm:px-0">
              <h1 className={`${title()}  `}>
                {splitTitle.map((item, index) => {
                  const isLast = index === splitTitle.length - 1;
                  return (
                    <span
                      key={index}
                      className={`${isLast ? 'text-orange-400' : ''} flex  justify-center leading-normal`}
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
                    {console.log(servicesImage[item.title].src)}
                    <Image
                      className="rounded-xl shadow-sm"
                      isZoomed
                      alt={item.title}
                      src={servicesImage[item.title].src}
                    />
                  </div>
                </div>
                <div
                  className={`${item.imageOrder !== 1 ? 'order-1' : 'order-2'} col-span-full sm:col-span-4 flex items-center gap-5 justify-center flex-col `}
                >
                  {item.details.map((detailItem) => {
                    return (
                      <div className="flex gap-3 justify-start tracking-wide text-xl font-normal text-start  items-center">
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
          <h1 className={`${title()} leading-normal`}>
            More Reasons to Choose{' '}
            <span className={`text-orange-400`}>MG Plus</span>
          </h1>

          {/* <h1 className={`${title()} text-orange-400`}>MG Plus</h1> */}
        </div>
        <div>
          <div className="grid sm:grid-cols-2 sm:px-0 px-4 sm:gap-5 pt-5 gap-y-5 sm:gap-y-12">
            {reasonsToChoose.map((item, index) => {
              return (
                <div className="text-start  sm:w-4/5 shadow-lg p-4 rounded-xl dark:border-neutral-600 dark:border-2 border mx-auto">
                  <h1
                    className={`${title({ size: 'sm' })} font-semibold mb-4 text-orange-400  `}
                  >
                    {item.title}
                  </h1>
                  <p className="text-lg mt-4 font-semibold dark:text-white text-gray-500">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

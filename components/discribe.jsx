'use client';

import Image from 'next/image';
import streamingServices from '../assets/images/streaming-services.png';
import { title } from './primitives';

function Discribe() {
  return (
    <div className="dark:border-white border-gray-400 border-2 grid grid-cols-7 rounded-2xl overflow-hidden ">
      <div className="flex justify-center items-center col-span-4">
        <div className="px-12 py-8 flex flex-col gap-5">
          <h1 className={`${title({ size: 'sm' })} font-semibold  `}>
            Let MG Plus drive the success of your next release
          </h1>
          <p className="text-lg font-semibold dark:text-white text-gray-500">
            Elevate your music with a platform designed to deliver results
          </p>
        </div>
      </div>
      <div className="col-span-3">
        <Image alt="HeroUI hero Image" src={streamingServices} />
      </div>
    </div>
  );
}

export default Discribe;

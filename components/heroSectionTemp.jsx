'use client';
import { Button } from '@heroui/button';

export function HeroSectionTemp({
  heading,
  details,
  detailsFont,
  componentWidth,
  btnTitle = 'MG Plus',
  showButton = false,
}) {
  return (
    <div
      style={{ width: componentWidth }}
      className={`${componentWidth && 'mx-auto'} flex justify-center h-[calc(100vh-6.625rem)] flex-col items-center`}
    >
      {heading}
      <p
        style={{ fontSize: detailsFont }}
        className={`${!detailsFont && 'text-2xl'} ${!componentWidth && 'max-w-2xl'}  leading-10 mt-16 font-semibold dark:text-neutral-400 text-neutral-500`}
      >
        {details}
      </p>
      {showButton && (
        <div>
          <Button
            className="bg-orange-500 text-lg my-16 px-20"
            size="lg"
            radius="sm"
          >
            {btnTitle}
          </Button>
        </div>
      )}
    </div>
  );
}

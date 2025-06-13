'use client';
// import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '@heroui/button';
import {
  Amazon,
  Apple,
  Deezer,
  Music,
  Spotify,
  YouTube,
} from '../../assets/brand-Icons';
// import {Spotify} from '../../assets/brand-Icons/index'

// import { useState } from 'react';

export const HoverEffect = ({ items, className, page }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const musicPlateformsIcon = {
    Spotify: <Spotify width={48} />,
    'Apple Music': <Apple />,
    'Amazon Music': <Amazon />,
    'YouTube Music': <YouTube />,
    Deezer: <Deezer />,
    other: <Music />,
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full hover:border-0 bg-neutral-300/[0.3] dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            className={`dark:bg-neutral-900 bg-neutral-200 hover:border-0  border-2`}
          >
            <CardTitle className={`text-black dark:text-white`}>
              {page === 'distribution' ? (
                <div className="flex items-center justify-center gap-3">
                  <span>
                    {musicPlateformsIcon[item.title] ||
                      musicPlateformsIcon.other}
                  </span>
                  <span>{item.title}</span>
                </div>
              ) : (
                item.title
              )}
            </CardTitle>
            {page !== 'distribution' && (
              <div className="flex  justify-center my-10 items-center">
                <CardTitle className={`m-0 text-black dark:text-white`}>
                  {item.price}
                </CardTitle>
                <CardDescription
                  className={`m-0 text-neutral-500  dark:text-neutral-200 `}
                >
                  {'/'}
                </CardDescription>
                <CardDescription
                  className={`m-0 text-neutral-500 dark:text-neutral-400`}
                >
                  {item.duration}
                </CardDescription>
              </div>
            )}

            <CardDescription
              className={`text-neutral-500 dark:text-neutral-400`}
            >
              {item.description}
            </CardDescription>

            {page !== 'distribution' && (
              <Button variant="ghost" className="mt-10">
                Send message
              </Button>
            )}
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn('text-zinc-100 font-bold tracking-wide mt-4', className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        'mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};

import React from 'react'
import { title } from './primitives'

function TextOnGlass({primaryPoint, heading, detail}) {
    return (
        <div className="relative border-2 p-10 md:py-16 rounded-2xl dark:bg-neutral-800/55 bg-white/15 z-20 text-center mx-4 sm:mx-0 sm:w-3/4 md:w-3/4
                 flex flex-col items-center justify-center text-white px-4">
                  <div className="flex flex-col gap-4">
                <h1 style={{ lineHeight: 1.15 }} id="musicCareer" className={`${title({ size: 'lg' })} w-4/5 mx-auto leading-loose`}>
                    {primaryPoint.split(' ').map((item, index) => {
                       return index === 0
                            ? <span className='dark:text-darkThemePrimaryText text-lightThemePrimaryText'>{item}</span>
                            : <span className='dark:text-darkThemeSecondryText text-darkThemeSecondryText'> {item}</span> 
                    })}{heading}
                    </h1>
                  </div>
                  <p className="text-2xl w-4/5 leading-10 mt-12 font-semibold dark:text-neutral-200 text-neutral-200">
                  {detail}
                  </p>
                </div>
    )
}

export default TextOnGlass
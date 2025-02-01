import React from 'react'

function SectionHeading({ heading, headingText, type = 1 }) {
    return (
        <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className={`${type === 1 ? 'text-neutral-900' : 'text-white'} text-4xl font-bold mb-4`}>{heading}</h2>
            <p className={`${type === 1 ? 'text-neutral-600' : 'text-gray-300'}`}>{headingText}</p>
            <div className="w-24 h-1 bg-rose-500 mx-auto mt-4"></div>
        </div >
    )
}

export default SectionHeading
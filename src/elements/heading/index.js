import React from 'react'

export function Heading({ type, title, variant, alignment }) {
    let headingType;
    switch (type) {
        case 1:
            headingType = {
                fontWeight: 'bold',
                fontSize: 24,
                letterSpacing: 0.3,
            };
            break;
        case 2:
            headingType = {
                fontWeight: '500',
                fontSize: 20,
                letterSpacing: 0.2,
            };
            break;

        default:
            headingType = {
                fontWeight: '400',
                fontSize: 16,
                letterSpacing: 0.1,
            };
            break;
    }
    return (
        <div className='py-1'>
            <p style={{ color: variant, alignment, ...headingType }}>
                {title}
            </p>
        </div>
    );
}
export const primary = 1;
export const secondry = 2;
export const tertiary = 3;
export const light = '#c9c9c9';
export const white = '#fff';
export const dark = '#78716c';
export const Black = '#000';

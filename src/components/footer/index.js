import Image from 'next/image'
import React, { useEffect } from 'react'
import Spatika from '@/assets/images/partner/Spatika.png'
import { contactNumbers } from '@/model/constant'
import Link from 'next/link'

function Footer() {
    useEffect(() => {
        const doc = document.documentElement;
    }, [])
    return (
        <div className='border bg-slate-50 py-8 px-10 grid grid-flow-col grid-cols-4  text-white'>
            <div className='color bg-white'>
                {/* <Image
                    alt='Spatika'
                    src={Spatika}
                /> */}
            </div>
            <div>
                <div className="text-small font-bold mb-3">Spatika Services</div>
                {["Haircare", "Skincare", "Waxing", "Manicure/Pedicure", "Spa"].map((item, index) => {
                    return <p key={index} className="font-normal mb-0 ps-3 text-sm">{item}</p>
                })}

            </div>
            <div>
                <div className="text-small font-bold mb-3">Contact Us</div>
                {contactNumbers.map((contactNumber, index) => {
                    return <p key={index}>
                        <Link href={`tel:${contactNumber}`} className="font-normal mb-0 ps-3 text-sm">{contactNumber}</Link>
                    </p>
                })}
                <p>
                    <Link href={`mailto:spatikachemburdesk@gmail.com`} className="font-normal mb-0 ps-3 text-sm" >spatikachemburdesk@gmail.com</Link>
                </p>

            </div>
            <div>
                <div className="text-small font-bold mb-3">Business location</div>
                <p className="font-normal mb-0 ps-3 text-sm">
                    101,Spatika salon and spa,Silvento Building first floor, Central Avenue, Opposite OLPS church, Chembur East, Mumbai, Maharashtra 400071
                </p>
            </div>

        </div>
    )
}

export default Footer

import React from "react";
import product1 from '@/assets/images/product/product1.jpg'
import product2 from '@/assets/images/product/product2.jpg'
import product3 from '@/assets/images/product/product3.jpg'
import service1 from '@/assets/images/service1.png'
import Image from "next/image";
import spatikaSalonMens2 from '@/assets/images/spatikaSalonMens2.jpg'
import { aboutSalon, partenrs, services } from "@/model/constant";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Icons from "@/model/icons";

const AboutUs = () => {


    return (
        <div className="">

            <div className="border grid grid-flow-col grid-cols-7 px-10 py-16 gap-6">
                <div className="bg-slate-100 rounded-xl overflow-hidden shadow-large col-span-3">
                    <Image
                        alt="spatikaSalonMens1"
                        src={spatikaSalonMens2}
                    />
                </div>
                <div className="py-3 col-span-4 flex flex-col items-start">
                    <div className="flex-1">

                        <h1 className="text-3xl font-semibold mb-4 text-black">About Us</h1>
                        <p className="font-medium text-lg line-clamp-5">
                            {aboutSalon}
                        </p>
                    </div>
                    <Button variant="bordered" color="default" radius="sm" size="lg" >
                        Read More..
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

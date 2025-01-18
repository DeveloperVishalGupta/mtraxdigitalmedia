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
            <div>

                <div className="px-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6  ">
                    {/* {partenrs.map((item, index) => {
                        console.log(item);
                        let BGColor;
                        if (item.title === 'Jeannot' ||
                            item.title === 'Brazilian Hairtech' ||
                            item.title === 'Deplieve' ||
                            item.title === 'Raaga') {
                            BGColor = 'bg-black';
                        }

                        return <Card className=' p-3 relative group' key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
                            <div className=''>
                                <CardBody className="overflow-visible p-0">
                                    <div className='border rounded-lg overflow-hidden'>
                                        <Image
                                            alt={item.title}
                                            className={`${BGColor} w-full object-cover`}
                                            radius="lg"
                                            shadow="sm"
                                            src={item.img}
                                            width="100%"
                                        />
                                    </div>

                                </CardBody>
                                <CardFooter className="text-small justify-between">
                                    <b>{item.title}</b>
                                    <p className="text-default-500">{item.detail}</p>
                                </CardFooter>
                            </div>
                        </Card>
                    })} */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

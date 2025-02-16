import { spatikaServicCategories, spatikaServiceMenu } from '@/model/constant'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import {
    Button,
    useDisclosure,
    Tooltip,
    Accordion, AccordionItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@nextui-org/react";
import Xmark from '@/assets/icons/xmark';
import Image from 'next/image';

function Services() {
    const serviceCategory = spatikaServicCategories
    const allServices = spatikaServiceMenu
    const [selectedService, setSelectedService] = useState(null)
    const [activeService, setActiveService] = useState({
        title: null,
        discription: null,
        index: null,
        image: null
    })
    const {
        isOpen: isDrawerOpen,
        onOpen: onDrawerOpen,
        onOpenChange: onDrawerOpenChange,
    } = useDisclosure();

    const {
        isOpen: isModalOpen,
        onOpen: onModalOpen,
        onOpenChange: onModalOpenChange,
    } = useDisclosure();

    function changeServiceIndex(type) {
        const currentServiceIndex = activeService.index
        let changeIndex = currentServiceIndex;
        if (type === 1) {
            changeIndex = currentServiceIndex + 1;
            if (changeIndex >= serviceCategory.length) {
                changeIndex = 0;
            }
        } else {
            changeIndex = currentServiceIndex - 1;
            if (changeIndex < 0) {
                changeIndex = serviceCategory.length - 1;
            }
        }
        setActiveService({
            title: serviceCategory[changeIndex].title,
            discription: serviceCategory[changeIndex].discription,
            image: serviceCategory[changeIndex].image,
            index: changeIndex
        })

    }
    const renderAccordion = (key, value) => {
        if (Array.isArray(value)) {
            return (
                <AccordionItem onPress={onModalOpen} className='border-2 rounded-md bg-neutral-500 text-white font-semibold mb-2 px-3 ' key={key} title={key} isCollapsed>
                    <Modal size='4xl' isOpen={isModalOpen} onOpenChange={onModalOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 capitalize">{key}</ModalHeader>
                                    <ModalBody>
                                        <div className='overflow-scroll' style={{ maxHeight: '80vh', flexWrap: "wrap", gap: "1rem" }}>
                                            {value.map((item, index) => (

                                                <div
                                                    key={index}
                                                    className='border-slate-200 border rounded-lg p-4 shadow-md mb-3'
                                                >
                                                    <strong>{item.name}</strong>
                                                    <br />
                                                    {/* {item.rate && (
                                                        <>
                                                            Rate: ₹{item.rate}
                                                            <br />
                                                        </>
                                                    )} */}
                                                    {/* {item.members_rate && (
                                                        <>
                                                            Members Rate: ₹{item.members_rate}
                                                            <br />
                                                        </>
                                                    )} */}
                                                    {item.time && (
                                                        <>
                                                            Time: {item.time} minutes
                                                            <br />
                                                        </>
                                                    )}
                                                    {item.service && (
                                                        <>
                                                            Services:{` [ ${item.service.join(', ')} ]`}
                                                        </>
                                                    )}
                                                    {item.note && (
                                                        <>
                                                            Note: {item.note}
                                                            <br />
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </AccordionItem>
            );
        } else if (typeof value === "object" && value !== null) {
            return (
                <AccordionItem key={key} title={key} isCollapsed className='border-2 rounded-md bg-neutral-500 text-white  mb-2 px-3 '>
                    <Accordion className='text-white font-semibold'>
                        {Object.entries(value).map(([nestedKey, nestedValue]) =>
                            renderAccordion(nestedKey, nestedValue)
                        )}
                    </Accordion>
                </AccordionItem>
            );
        } else {
            return null;
        }
    };

    useEffect(() => {
        console.log(activeService);

        if (activeService && allServices) {
            setSelectedService(allServices[activeService.title])
        }
    }, [activeService])

    useEffect(() => {
        if (selectedService) {
            onDrawerOpen()
        }
    }, [selectedService])
    console.log(selectedService);

    return (
        <div className=''>
            <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {serviceCategory.map((item, index) => {

                    return <Card className='border p-2 relative group' key={index} isPressable shadow="sm"
                        onPress={() => {
                            console.log(item.title);

                            setActiveService({
                                title: item.title,
                                discription: item.discription,
                                image: item.image,
                                index
                            })
                        }
                        }>
                        <div className=''>
                            <CardBody className="overflow-visible p-0">
                                <div className='border rounded-lg overflow-hidden'>
                                    <Image
                                        loading='lazy'
                                        alt={item.title}
                                        className="w-full object-cover rounded-lg shadow-sm hover:scale-125 !duration-500"
                                        src={item.image}
                                    />
                                </div>
                            </CardBody>
                            <CardFooter className="text-small justify-between px-1 py-1">
                                <p className='text-lg text-spatikaBlack font-medium '>{item.title}</p>
                                <p className="text-default-500">{item.detail}</p>
                            </CardFooter>
                        </div>
                    </Card>
                })}
            </div>
            <Modal
                className='overflow-hidden'
                isOpen={isDrawerOpen}
                scrollBehavior='inside'
                onOpenChange={onDrawerOpenChange}
                size={'2xl'}
                backdrop="blur"
                isDismissable={false}
                classNames={{
                    base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2 rounded-medium",
                }}
            >
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                                <div className="gap-1 text-center">
                                    <h1 className="text-xl font-semibold text-neutral-900 leading-7">
                                        {activeService.title} Service
                                    </h1>
                                </div>
                                <Tooltip content="Close">
                                    <Button
                                        isIconOnly
                                        className="text-neutral-900"
                                        size="sm"
                                        variant="light"
                                        onPress={() => {
                                            onClose()
                                            setSelectedService(null)
                                        }}
                                    >
                                        <Xmark />
                                    </Button>
                                </Tooltip>
                            </ModalHeader>

                            <ModalBody className="pt-14">
                                <div className="flex w-full justify-between items-center pt-4">
                                    <Tooltip content="Previous">
                                        <Button
                                            isIconOnly
                                            className="text-white bg-neutral-700 -rotate-90"
                                            size="sm"
                                            variant="flat"
                                            onPress={() => {
                                                changeServiceIndex(0)
                                            }}
                                        >
                                            <svg
                                                fill="none"
                                                height="16"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="m18 15-6-6-6 6" />
                                            </svg>
                                        </Button>
                                    </Tooltip>
                                    <div className='border bg-slate-400 overflow-hidden rounded-xl h-auto w-[30%]'>
                                        <Image
                                            loading='lazy'
                                            alt={activeService.title}
                                            className="w-full object-cover rounded-lg shadow-sm hover:scale-125 !duration-500"
                                            src={activeService.image}
                                        />
                                    </div>
                                    <Tooltip content="Next">
                                        <Button
                                            isIconOnly
                                            className="text-white bg-neutral-700 -rotate-90"
                                            size="sm"
                                            variant="flat"
                                            onPress={() => {
                                                changeServiceIndex(1)
                                            }}
                                        >
                                            <svg
                                                fill="none"
                                                height="16"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </Button>
                                    </Tooltip>
                                </div>
                                <p className="text-neutral-500 text-base">
                                    {activeService.discription}
                                </p>
                                <div className="flex flex-col gap-2 pt-2">
                                    <Accordion className='servicesAccordian border-2 pt-2 rounded-lg bg-neutral-700 '>
                                        {Object.entries(selectedService).map(([key, value]) => renderAccordion(key, value))}
                                    </Accordion>
                                    <div className="mt-4 flex flex-col gap-3">
                                        {/* <div className="flex gap-3 items-center">
                                            <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                                                <div className="text-tiny bg-default-100 py-0.5 text-default-500">Nov</div>
                                                <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                                                    19
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <p className="text-medium text-foreground font-medium">
                                                    Tuesday, November 19
                                                </p>
                                                <p className="text-small text-default-500">5:00 PM - 9:00 PM PST</p>
                                            </div>
                                        </div> */}
                                        {/* <div className="flex gap-3 items-center">
                                            <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                                                <svg
                                                    className="text-default-500"
                                                    height="20"
                                                    viewBox="0 0 16 16"
                                                    width="20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        fill="none"
                                                        fillRule="evenodd"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    >
                                                        <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
                                                        <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <Link
                                                    isExternal
                                                    showAnchorIcon
                                                    anchorIcon={
                                                        <svg
                                                            className="group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                            fill="none"
                                                            height="16"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            viewBox="0 0 24 24"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M7 17 17 7M7 7h10v10" />
                                                        </svg>
                                                    }
                                                    className="group gap-x-0.5 text-medium text-foreground font-medium"
                                                    href="https://www.google.com/maps/place/555+California+St,+San+Francisco,+CA+94103"
                                                    rel="noreferrer noopener"
                                                >
                                                    555 California St suite 500
                                                </Link>
                                                <p className="text-small text-default-500">San Francisco, California</p>
                                            </div>
                                        </div> */}

                                        {/* <div className="flex flex-col mt-4 gap-3 items-start">
                                            <span className="text-small text-default-500">Hosted By</span>
                                            <div className="flex gap-2 items-center">
                                                <Avatar
                                                    name="NextUI"
                                                    size="sm"
                                                    src="https://nextui.org/android-chrome-192x192.png"
                                                />
                                                <span className="text-small text-default-500">Spatika Team</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-4 gap-3 items-start">
                                            <span className="text-small text-default-500">105 Going</span>
                                            <div className="flex gap-2 items-center">
                                                <AvatarGroup
                                                    isBordered
                                                    classNames={{
                                                        base: "pl-2",
                                                        count: "text-default-500 text-tiny bg-default-100",
                                                    }}
                                                    size="sm"
                                                    total={101}
                                                >
                                                    <Tooltip content="Alex">
                                                        <Avatar
                                                            className="data-[hover=true]:!translate-x-0"
                                                            name="Alex"
                                                            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                                                        />
                                                    </Tooltip>
                                                    <Tooltip content="Joe">
                                                        <Avatar
                                                            className="data-[hover=true]:!translate-x-0"
                                                            name="Joe"
                                                            src="https://i.pravatar.cc/150?u=a04258114e290267084"
                                                        />
                                                    </Tooltip>
                                                    <Tooltip content="John">
                                                        <Avatar
                                                            className="data-[hover=true]:!translate-x-0"
                                                            name="John"
                                                            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                                                        />
                                                    </Tooltip>
                                                    <Tooltip content="Jane">
                                                        <Avatar
                                                            className="data-[hover=true]:!translate-x-0"
                                                            name="Jane"
                                                            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                                        />
                                                    </Tooltip>
                                                </AvatarGroup>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div >
    )
}

export default Services

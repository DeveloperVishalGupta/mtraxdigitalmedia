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
        if (activeService && allServices) {
            setSelectedService(allServices[activeService.title])
        }
    }, [activeService])

    useEffect(() => {
        if (selectedService) {
            onDrawerOpen()
        }
    }, [selectedService])

    return (
        <div className=''>
            <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {serviceCategory.map((item, index) => {

                    return <Card className='border p-2 relative group' key={index} isPressable shadow="sm"
                        onPress={() => {
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
                                        name='twitter icon'
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
                                            name='icon'
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
                                            name='icon'
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
                                <p className="text-neutral-800 font-semibold text-base">
                                    {activeService.discription}
                                </p>
                                <div className="flex flex-col gap-2 pt-2">
                                    <Accordion className='servicesAccordian border-2 pt-2 rounded-lg bg-neutral-700 '>
                                        {Object.entries(selectedService).map(([key, value]) => renderAccordion(key, value))}
                                    </Accordion>
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

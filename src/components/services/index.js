import { services, spatikaServicCategories, spatikaServiceMenu } from '@/model/constant'
// import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, } from "@nextui-org/react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Image,
    Link,
    Tooltip,
    Avatar,
    AvatarGroup,
    Accordion, AccordionItem
} from "@nextui-org/react";
// import Image from 'next/image';
import { NestedAccordion } from '../nestedAccordian';

function Services() {
    const allServices = spatikaServiceMenu
    const [selectedService, setSelectedService] = useState(null)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // const renderAccordion = (key, value) => {
    //     if (Array.isArray(value)) {
    //         return (
    //             <AccordionItem key={key} title={key}>
    //                 <div>
    //                     {value.map((item, index) => (
    //                         <div key={index} style={{ marginBottom: "1rem" }}>
    //                             <strong>{item.name}</strong>
    //                             <br />
    //                             {item.rate && (
    //                                 <>
    //                                     Rate: ₹{item.rate}
    //                                     <br />
    //                                 </>
    //                             )}
    //                             {item.members_rate && (
    //                                 <>
    //                                     Members Rate: ₹{item.members_rate}
    //                                     <br />
    //                                 </>
    //                             )}
    //                             {item.time && (
    //                                 <>
    //                                     Time: {item.time} minutes
    //                                     <br />
    //                                 </>
    //                             )}
    //                             {item.service && (
    //                                 <>
    //                                     Services:
    //                                     <ul>
    //                                         {item.service.map((service, i) => (
    //                                             <li key={i}>{service}</li>
    //                                         ))}
    //                                     </ul>
    //                                 </>
    //                             )}
    //                         </div>
    //                     ))}
    //                 </div>
    //             </AccordionItem>
    //         );
    //     } else if (typeof value === "object" && value !== null) {
    //         return (
    //             <AccordionItem key={key} title={key} isCollapsed>
    //                 <Accordion>
    //                     {Object.entries(value).map(([nestedKey, nestedValue]) =>
    //                         renderAccordion(nestedKey, nestedValue)
    //                     )}
    //                 </Accordion>
    //             </AccordionItem>
    //         );
    //     } else {
    //         return null;
    //     }
    // };


    const renderAccordion = (key, value) => {
        if (Array.isArray(value)) {
            return (
                <AccordionItem key={key} title={key} isCollapsed>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        {value.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    padding: "1rem",
                                    width: "300px",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <strong>{item.name}</strong>
                                <br />
                                {item.rate && (
                                    <>
                                        Rate: ₹{item.rate}
                                        <br />
                                    </>
                                )}
                                {item.members_rate && (
                                    <>
                                        Members Rate: ₹{item.members_rate}
                                        <br />
                                    </>
                                )}
                                {item.time && (
                                    <>
                                        Time: {item.time} minutes
                                        <br />
                                    </>
                                )}
                                {item.service && (
                                    <>
                                        Services:
                                        <ul>
                                            {item.service.map((service, i) => (
                                                <li key={i}>{service}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </AccordionItem>
            );
        } else if (typeof value === "object" && value !== null) {
            return (
                <AccordionItem key={key} title={key} isCollapsed>
                    <Accordion>
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

    function renderArrayByKey(key) {

        if (key in allServices) {
            console.log(allServices);

            setSelectedService(allServices[key])

        } else {
            return `Key "${key}" not found in object`;
        }
    }

    useEffect(() => {
        if (selectedService) {
            onOpen()
        }
    }, [selectedService])
    console.log(selectedService);

    return (
        <div className='border bg-slate-200 mt-8 px-10 pt-16 pb-14'>
            <h1 className="text-3xl font-semibold mb-4 text-black">Services</h1>

            <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {spatikaServicCategories.map((item, index) => {

                    return <Card className='border p-2 relative group' key={index} isPressable shadow="sm"
                        onPress={() => {
                            renderArrayByKey(item.title)
                        }
                        }>
                        <div className=''>
                            <CardBody className="overflow-visible p-0">
                                <div className='border rounded-lg overflow-hidden'>
                                    <Image
                                        alt={item.title}
                                        className="w-full object-cover"
                                        radius="lg"
                                        shadow="sm"
                                        src={item.image.src}
                                    />
                                </div>

                            </CardBody>
                            <CardFooter className="text-small justify-between px-1 py-1">
                                <p className='text-small font-medium '>{item.title}</p>
                                <p className="text-default-500">{item.detail}</p>
                            </CardFooter>
                        </div>
                        <div className='hidden hover:visible'>
                            {/* <CardBody className="overflow-visible p-0">
                                <div className='border rounded-lg overflow-hidden'>
                                    <Image
                                        alt={item.title}
                                        className="w-full object-cover h-[300px]"
                                        radius="lg"
                                        shadow="sm"
                                        src={item.img}
                                        width="100%"
                                    />
                                </div>

                            </CardBody> */}
                            {/* <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.detail}</p>
                            </CardFooter> */}
                            <div
                                class="absolute left-0 mt-2 w-40 p-2 bg-gray-800 text-white text-sm rounded opacity-0 invisible transition-all duration-300 ease-in-out transform scale-90 group-hover:opacity-100 group-hover:visible group-hover:scale-100"
                            >
                                This is a hidden element!
                            </div>
                        </div>

                    </Card>
                })}
            </div>
            <Drawer
                hideCloseButton
                backdrop="blur"
                classNames={{
                    base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
                }}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                                <Tooltip content="Close">
                                    <Button
                                        isIconOnly
                                        className="text-default-400"
                                        size="sm"
                                        variant="light"
                                        onPress={onClose}
                                    >
                                        <svg
                                            fill="none"
                                            height="20"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                                        </svg>
                                    </Button>
                                </Tooltip>
                                <div className="w-full flex justify-start gap-2">
                                    <Button
                                        className="font-medium text-small text-default-500"
                                        size="sm"
                                        startContent={
                                            <svg
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.85.75c-.908 0-1.702.328-2.265.933-.558.599-.835 1.41-.835 2.29V7.88c0 .801.23 1.548.697 2.129.472.587 1.15.96 1.951 1.06a.75.75 0 1 0 .185-1.489c-.435-.054-.752-.243-.967-.51-.219-.273-.366-.673-.366-1.19V3.973c0-.568.176-.993.433-1.268.25-.27.632-.455 1.167-.455h4.146c.479 0 .828.146 1.071.359.246.215.43.54.497.979a.75.75 0 0 0 1.483-.23c-.115-.739-.447-1.4-.99-1.877C9.51 1 8.796.75 7.996.75zM7.9 4.828c-.908 0-1.702.326-2.265.93-.558.6-.835 1.41-.835 2.29v3.905c0 .879.275 1.69.833 2.289.563.605 1.357.931 2.267.931h4.144c.91 0 1.705-.326 2.268-.931.558-.599.833-1.41.833-2.289V8.048c0-.879-.275-1.69-.833-2.289-.563-.605-1.357-.931-2.267-.931zm-1.6 3.22c0-.568.176-.992.432-1.266.25-.27.632-.454 1.168-.454h4.145c.54 0 .92.185 1.17.453.255.274.43.698.43 1.267v3.905c0 .569-.175.993-.43 1.267-.25.268-.631.453-1.17.453H7.898c-.54 0-.92-.185-1.17-.453-.255-.274-.43-.698-.43-1.267z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        }
                                        variant="flat"
                                    >
                                        Copy Link
                                    </Button>
                                    <Button
                                        className="font-medium text-small text-default-500"
                                        endContent={
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
                                                <path d="M7 17 17 7M7 7h10v10" />
                                            </svg>
                                        }
                                        size="sm"
                                        variant="flat"
                                    >
                                        Event Page
                                    </Button>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Tooltip content="Previous">
                                        <Button isIconOnly className="text-default-500" size="sm" variant="flat">
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
                                    <Tooltip content="Next">
                                        <Button isIconOnly className="text-default-500" size="sm" variant="flat">
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
                            </DrawerHeader>
                            <DrawerBody className="pt-16">
                                <div className="flex w-full justify-center items-center pt-4">
                                    <div className='border bg-slate-400 rounded-xl  h-52 w-1/2'></div>

                                </div>


                                <div className="flex flex-col gap-2 py-4">
                                    <h1 className="text-xl text-center font-semibold  leading-7">
                                        Total Beauty Care Under One Roof
                                    </h1>
                                    <p className="text-sm text-center text-default-500">
                                        Comprehensive hair, skin, and grooming solutions tailored for you.
                                    </p>
                                    <Accordion>
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

                                        <div className="flex flex-col mt-4 gap-3 items-start">
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
                                        </div>
                                    </div>
                                </div>
                            </DrawerBody>
                            <DrawerFooter className="flex flex-col gap-1">
                                <div className="text-default-600 text-sm">Contact the saloon</div>
                                <Link className="text-default-400" href={`tel:8655165656`} size="sm">
                                    8655165656
                                </Link>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>

        </div >
    )
}

export default Services

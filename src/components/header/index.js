import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownSection,
    Popover, PopoverTrigger, PopoverContent
} from "@nextui-org/react";

import Spatika from '@/assets/images/partner/Spatika.png'
import Image from "next/image";
import Icons from "@/model/icons";
import { contactDetails, contactNumbers } from "@/model/constant";
import PhoneIcon from "@/assets/icons/phone";
import At from "@/assets/icons/at";
import LocationCrosshairs from "@/assets/icons/locationCrosshairs";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const Lock = ({ fill, size, height, width, ...props }) => {
    const color = fill;

    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g transform="translate(3.5 2)">
                <path
                    d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(3.85 0.75)"
                />
                <path
                    d="M.5,0V2.221"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(7.91 12.156)"
                />
                <path
                    d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(0.75 6.824)"
                />
            </g>
        </svg>
    );
};

export const Activity = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            >
                <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
                <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
                <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
            </g>
        </svg>
    );
};

export const Flash = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const Server = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const TagUser = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const Scale = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M18 10V6h-4M6 14v4h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export default function Header() {
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };

    const destinationLatitude = 19.055764;
    const destinationLongitude = 72.900436;

    const handleShowRoute = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const origin = `${latitude},${longitude}`;
                    const destination = `${destinationLatitude},${destinationLongitude}`;
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
                    window.open(mapsUrl, "_blank");
                },
                (error) => {
                    alert("Error fetching location. Please allow location access in your browser.");
                    console.error(error);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };



    return (
        <Navbar>
            <NavbarBrand>

                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Popover placement="bottom" showArrow={true} style={{ width: 364 }}>
                    <PopoverTrigger>
                        <div className="font-semibold capitalize text-black">
                            Connect Us
                        </div>
                        {/* <Button></Button> */}
                    </PopoverTrigger>
                    <PopoverContent >
                        <div className="px-1 py-2">
                            {/* contact detail  */}
                            <div className="border-b-2 px-3 py-2">

                                <div className="text-small font-bold mb-3">Contact Information</div>
                                {contactNumbers.map((contactNumber, index) => {
                                    return (
                                        <div key={index} className=" mb-2">
                                            <div className="flex items-center justify-start ">

                                                <PhoneIcon color={'gray'} width={12} height={14} />
                                                <p className="font-normal mb-0 ps-3 text-sm">Phone {index + 1}</p>
                                            </div>
                                            <div className="border-slate-200 flex justify-between">

                                                <p className="font-normal ms-3  ps-3 text-sm">{contactNumber}</p>
                                                <Button href={`tel:${contactNumber}`} size="sm" variant="bordered" className="h-6">
                                                    Call
                                                </Button>
                                            </div>
                                        </div>

                                    )
                                })
                                }
                            </div>

                            {/* Email detail  */}
                            <div className="px-3 py-2 border-b-2">
                                <div className="text-small font-bold mb-3">Email Address</div>
                                <div className=" mb-2 flex justify-between">
                                    <div className="flex items-center justify-start ">
                                        <At color={'gray'} width={12} height={14} />
                                        <p className="font-normal mb-0 ps-3 text-sm">spatikachemburdesk@gmail.com</p>
                                    </div>
                                    <Button href={`mailto:${'spatikachemburdesk@gmail.com'}`} size="sm" variant="bordered" className="h-6">
                                        Email
                                    </Button>
                                </div>
                            </div>
                            {/* Email detail  */}
                            <div className="px-3 py-2">
                                <div className="text-small font-bold mb-3">Business Address</div>
                                <div className=" mb-2 flex justify-between items-center">
                                    <div className="flex items-center justify-start ">
                                        <LocationCrosshairs color={'gray'} width={50} height={50} />
                                        <p className="font-normal mb-0 ps-3 text-sm">101,Spatika salon and spa,Silvento Building first floor, Central Avenue, Opposite OLPS church, Chembur East, Mumbai, Maharashtra 400071</p>
                                    </div>
                                    <Button onPress={() => {
                                        handleShowRoute()
                                    }} size="sm" variant="bordered" className="h-6">
                                        Map
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </PopoverContent>
                </Popover>
                <NavbarItem>
                    <Link className="font-semibold" color="foreground" href="./services">
                        Locat Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="font-semibold" color="foreground" href="#">
                        Services
                    </Link>
                </NavbarItem>
            </NavbarContent>

        </Navbar >
    );
}

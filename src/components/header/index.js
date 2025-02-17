import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import Spatika from '@/assets/images/logo.png'
import { NavMenus } from "@/model/constant";
import Image from "next/image";
import Bars from "@/assets/icons/bars";

export default function Header() {
    return (
        <Navbar className="h-[4.5rem] w-full spatikaHeader md:px-12 static">
            <NavbarBrand className="order-2 md:order-1 justify-end md:justify-start" >
                <div className="h-16  flex justify-start items-center">
                    <Image
                        loading="lazy"
                        className="h-20 w-fit"
                        alt="Spatika.com"
                        src={Spatika}
                    />
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 md:order-2" justify="center">
                {
                    NavMenus.map((item, index) => {
                        return (
                            <NavbarItem>
                                <Link className="font-medium text-gray-900  hover:text-rose-500 bottom-b" color="foreground" href={item.href}>
                                    {item.title}
                                </Link>
                            </NavbarItem>
                        )
                    })
                }
                <NavbarItem>
                    <Link
                        className="rounded-md bg-rose-500 px-3 hover:bg-rose-600 text-white font-medium py-1 h-9"
                        radius="full"
                        href="#booking"
                    >
                        Book Now
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="md:hidden" justify="center">
                <NavbarItem>
                    <Link
                        className="rounded-md bg-rose-500 px-3 hover:bg-rose-600 text-white font-medium py-1 h-9"
                        radius="full"
                        href="#services"
                    >
                        <Bars />
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar >
    );
}

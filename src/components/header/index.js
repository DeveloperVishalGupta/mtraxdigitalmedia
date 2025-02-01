import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Image,
    Button
} from "@nextui-org/react";
import Spatika from '@/assets/images/logo.png'
import { NavMenus } from "@/model/constant";

export default function Header() {
    return (
        <Navbar className="h-[4.5rem] w-full spatikaHeader px-12 ">
            <NavbarBrand  >
                <div className="h-16 flex justify-start items-center">
                    <Image
                        className="h-20"
                        alt="Spatika.com"
                        src={Spatika.src}
                    />
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
                    <Button
                        className="rounded-md bg-rose-500 hover:bg-rose-600 text-white font-medium py-1 h-9"
                        radius="full"
                    >
                        Book Now
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar >
    );
}

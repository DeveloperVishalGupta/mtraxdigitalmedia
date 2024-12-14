// 'client side'
import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Icons from "@/model/icons";
// import Icons from "@/modal/enum/icons";
// import { NavMenus } from "@/constant/page";
import { NavMenus } from "@/model/constant";

function Header() {
    const nav = NavMenus();
    console.log(nav);
    return (
        <div>
            <div className="grid grid-cols-12 shadow-md">
                <div className="col-span-2 text-center">
                    <Image src={logo} alt="logo" className=" mx-auto max-w-24" />
                </div>
                <div className="col-span-10">
                    <div className="grid grid-flow-row">
                        <div className="bg-green justify-between items-center py-2 px-12 rounded-bl-[2.5rem] flex">
                            <div className="">
                                <ul className="flex text-white text-base tracking-wide">
                                    <li className="me-4 flex items-center ">
                                        <span className="me-2">
                                            {Icons.getComponent(Icons.PHONEVOLUME, {
                                                color: "white",
                                            })}
                                        </span>{" "}
                                        9320206598
                                    </li>
                                    <li className="flex items-center">
                                        <span className="me-2">
                                            {Icons.getComponent(Icons.AT, { color: "white" })}
                                        </span>{" "}
                                        Vishalguptaramasare@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center text-white tracking-wide cursor-pointer">
                                LogIn{" "}
                                <span className="ms-2">
                                    {" "}
                                    {Icons.getComponent(Icons.RIGHTTOBRACKET, { color: "white" })}
                                </span>{" "}
                            </div>
                        </div>
                        <div className="py-3 w-8/12 me-12 ms-auto">
                            <ul className="flex justify-around">
                                {nav?.map((item, index) => {
                                    return (
                                        <li key={index} className="uppercase hover:text-[#1ab293] cursor-pointer">
                                            {item?.title}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

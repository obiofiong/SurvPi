import { useState } from "react";
import SearchBar from "./SearchBar";
import NavbarLinks from "./NavbarLinks";
import { MenuAlt2Icon } from "@heroicons/react/solid";


function Navbar(){
    return (
        <nav className="relative w-full text-white bg-purple-500 px-4 pt-4 pb-6 sm:pt-6 sm:pb-3">
 
        {/* {isMobileNavOpen && (
            <MobileNav handleMobileNavToggle={handleMobileNavToggle} />
        )} */}

        <div className="flex items-center justify-between mb-3 sm:justify-evenly">
            <div className="flex items-center cursor-pointer">
                <MenuAlt2Icon
                    className="h-10 text-purple-300 sm:hidden hover:text-white"
                />
                <span className="font-bold mx-2 transform hover:scale-110">
                    PiSURV
                </span>
            </div>
            {/* Search bar on desktop */}
            <div className=" hidden sm:block flex-grow mx-6">
                <SearchBar className="" />
            </div>

            <div className="flex items-center">
                {/* Navbar on desktop */}
                <NavbarLinks />

                <div className="rounded-full h-7 w-7  sm:h-8 sm:w-8 border border-gray-400 bg-white shadow-lg"></div>
                <div className="relative mx-2 cursor-pointer transform hover:scale-110">
                    <p>Login</p>
                    {/* <ShoppingCartIcon className="h-8 " /> */}
                </div>
            </div>
        </div>
        <div className="mx-8 sm:hidden">
            <SearchBar />
        </div>
    </nav>
    )
}

export default Navbar;
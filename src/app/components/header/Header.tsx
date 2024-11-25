"use client";
import { FaHamburger } from "react-icons/fa";
import { NavigationMenu } from "./NavigationMenu";
import { DrawerSidebar } from "./DrawerSidebar";
import { BrandLogo } from "./BrandLogo";

export const Header = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <main className="drawer-content flex flex-col">
                <div className="navbar bg-base-300 w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <FaHamburger />
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">
                        <BrandLogo />
                    </div>
                    <div className="hidden flex-none lg:block">
                        <NavigationMenu />
                    </div>
                </div>
                {children}
            </main>
            <DrawerSidebar />
        </div>
    );
};

Header.displayName = 'Header';
export default Header;




"use client";
import { FaHamburger } from "react-icons/fa";
import { NavigationMenu } from "./NavigationMenu";
import { DrawerSidebar } from "./DrawerSidebar";
import { BrandLogo } from "./BrandLogo";
import { useState } from 'react';

export const Header = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        const drawer = document.getElementById('my-drawer-3') as HTMLInputElement;
        if (drawer) {
            drawer.checked = !drawer.checked;
            setIsDrawerOpen(!isDrawerOpen);
        }
    };

    return (
        <div className="drawer">
            <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
                onChange={(e) => setIsDrawerOpen(e.target.checked)}
            />
            <main className="drawer-content flex flex-col">
                <header>
                    <nav className="navbar bg-base-300 w-full" role="navigation" aria-label="Main navigation">
                        <div className="flex-none lg:hidden">
                            <button
                                type="button"
                                onClick={toggleDrawer}
                                aria-label="Toggle navigation menu"
                                aria-expanded={isDrawerOpen}
                                aria-controls="navigation-drawer"
                                className="btn btn-square btn-ghost"
                            >
                                <FaHamburger aria-hidden="true" />
                                <span className="sr-only">Menu</span>
                            </button>
                        </div>
                        <div className="mx-2 flex-1 px-2">
                            <BrandLogo />
                        </div>
                        <div className="hidden flex-none lg:block">
                            <NavigationMenu />
                        </div>
                    </nav>
                </header>
                {children}
            </main>
            <DrawerSidebar />
        </div>
    );
};

Header.displayName = 'Header';
export default Header;




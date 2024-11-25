"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { settings } from "../../../../data/settings";
import ThemeController from "../theme-controller";

export const NavigationMenu = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <ul className="menu menu-horizontal" role="menubar">
            {settings.navigation.map((item) => (
                <li key={item.href} role="none">
                    <Link
                        href={item.href}
                        role="menuitem"
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className={`flex items-center gap-2 ${isActive(item.href) ? 'bg-primary text-primary-content' : ''}`}
                    >
                        <item.icon aria-hidden="true" />
                        {item.label}
                    </Link>
                </li>
            ))}
            <li role="none">
                <ThemeController />
            </li>
        </ul>
    );
};

export default NavigationMenu;
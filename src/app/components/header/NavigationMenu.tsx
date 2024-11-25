
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { settings } from "@/app/data/settings";

export const NavigationMenu = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <ul className="menu menu-horizontal">
            {settings.navigation.map((item) => (
                <li key={item.href}>
                    <Link
                        href={item.href}
                        className={`flex items-center gap-2 ${isActive(item.href) ? 'bg-primary text-primary-content' : ''}`}
                    >
                        <item.icon />
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavigationMenu;
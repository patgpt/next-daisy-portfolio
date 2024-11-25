
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { settings } from "@/app/data/settings";

export const DrawerSidebar = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
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
        </div>
    );
};
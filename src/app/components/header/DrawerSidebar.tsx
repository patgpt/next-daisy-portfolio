"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { settings } from "../../../../data/settings";

export const DrawerSidebar = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    const closeDrawer = () => {
        const drawer = document.getElementById('my-drawer-3') as HTMLInputElement;
        if (drawer) drawer.checked = false;
    };

    return (
        <div className="drawer-side" id="navigation-drawer">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <nav className="menu bg-base-200 min-h-full w-80 p-4" aria-label="Mobile navigation">
                <ul role="menu">
                    {settings.navigation.map((item) => (
                        <li key={item.href} role="none">
                            <Link
                                href={item.href}
                                role="menuitem"
                                onClick={closeDrawer}
                                aria-current={isActive(item.href) ? 'page' : undefined}
                                className={`flex items-center gap-2 ${isActive(item.href) ? 'bg-primary text-primary-content' : ''}`}
                            >
                                <item.icon aria-hidden="true" />
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
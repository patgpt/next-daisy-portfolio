
import Link from "next/link";
import { settings } from "@/app/data/settings";

export const BrandLogo = () => {
    return (
        <Link href="/" className="text-xl font-bold">
            {settings.siteName}
        </Link>
    );
};

export default BrandLogo;
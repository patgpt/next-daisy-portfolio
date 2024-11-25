import Link from "next/link";
import { settings } from "../../../../data/settings";

export const BrandLogo = () => {
    return (
        <Link href="/" className="text-xl font-bold" aria-label="Home">
            {settings.siteName}
        </Link>
    );
};

export default BrandLogo;
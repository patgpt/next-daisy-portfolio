import Image from "next/image"
import Link from "next/link";


export interface CardProps {
    image: {
        src: string;
        alt: string;
    }
    title: string;
    description: string;
    button: {
        label: string;
        href: string;
    }
}

const Card = ({
    image,
    title,
    description,
    button
}: CardProps) => {
    return (
        <div className="card glass h-full">
            <figure className="w-full relative h-[300px]">
                <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link
                        href={button.href}
                        className="btn btn-primary">{button.label}</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
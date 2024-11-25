import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import type { BlogPostDocument } from "../../../../prismicio-types";




const Card = (props: BlogPostDocument) => {
    return (
        <div className="card glass h-full">
            <figure className="w-full relative h-[300px]">
                <PrismicNextImage
                    fill
                    field={props.data.featured_image}
                    className="object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.data.title}</h2>
                <PrismicRichText field={props.data.content} />
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    )
}

export default Card
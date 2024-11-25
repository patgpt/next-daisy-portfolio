import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Author`.
 */
export type AuthorProps = SliceComponentProps<Content.AuthorSlice>;

/**
 * Component for "Author" Slices.
 */
const Author = ({ slice }: AuthorProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="prose prose-lg max-w-none my-8">
        <h2>Author: </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-base-200 rounded-full">
            <PrismicNextImage
              className="rounded-full"
              field={slice.primary.author_image} />
          </div>
          <div>
            <h3 className="text-2xl">{
              slice.primary.author_name
            }</h3>

            <PrismicRichText field={slice.primary.author_bio} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;

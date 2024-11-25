import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md prose">
            <PrismicNextImage className="rounded-full shadow-2xl" field={slice.primary.hero_image} />
            <PrismicRichText field={slice.primary.introtext} />
            <PrismicNextLink field={slice.primary.cta[0]?.cta_link} className="btn btn-primary">
              {slice.primary.cta[0]?.cta_text}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DogPhotoCarousel`.
 */
export type DogPhotoCarouselProps =
  SliceComponentProps<Content.DogPhotoCarouselSlice>;

/**
 * Component for "DogPhotoCarousel" Slices.
 */
const DogPhotoCarousel = ({ slice }: DogPhotoCarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for dog_photo_carousel (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default DogPhotoCarousel;

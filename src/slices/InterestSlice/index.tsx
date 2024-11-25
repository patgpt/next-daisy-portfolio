import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `InterestSlice`.
 */
export type InterestSliceProps =
  SliceComponentProps<Content.InterestSliceSlice>;

/**
 * Component for "InterestSlice" Slices.
 */
const InterestSlice = ({ slice }: InterestSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for interest_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default InterestSlice;

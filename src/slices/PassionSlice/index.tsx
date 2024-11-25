import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PassionSlice`.
 */
export type PassionSliceProps = SliceComponentProps<Content.PassionSliceSlice>;

/**
 * Component for "PassionSlice" Slices.
 */
const PassionSlice = ({ slice }: PassionSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for passion_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PassionSlice;

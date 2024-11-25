import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PfpSlice`.
 */
export type PfpSliceProps = SliceComponentProps<Content.PfpSliceSlice>;

/**
 * Component for "PfpSlice" Slices.
 */
const PfpSlice = ({ slice }: PfpSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pfp_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default PfpSlice;

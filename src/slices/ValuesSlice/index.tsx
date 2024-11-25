import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ValuesSlice`.
 */
export type ValuesSliceProps = SliceComponentProps<Content.ValuesSliceSlice>;

/**
 * Component for "ValuesSlice" Slices.
 */
const ValuesSlice = ({ slice }: ValuesSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for values_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ValuesSlice;

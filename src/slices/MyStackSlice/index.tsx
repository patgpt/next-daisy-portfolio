import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MyStackSlice`.
 */
export type MyStackSliceProps = SliceComponentProps<Content.MyStackSliceSlice>;

/**
 * Component for "MyStackSlice" Slices.
 */
const MyStackSlice = ({ slice }: MyStackSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for my_stack_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MyStackSlice;

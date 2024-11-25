import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FunFactsSlice`.
 */
export type FunFactsSliceProps =
  SliceComponentProps<Content.FunFactsSliceSlice>;

/**
 * Component for "FunFactsSlice" Slices.
 */
const FunFactsSlice = ({ slice }: FunFactsSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fun_facts_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FunFactsSlice;

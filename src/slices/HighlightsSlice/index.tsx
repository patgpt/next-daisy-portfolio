import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HighlightsSlice`.
 */
export type HighlightsSliceProps =
  SliceComponentProps<Content.HighlightsSliceSlice>;

/**
 * Component for "HighlightsSlice" Slices.
 */
const HighlightsSlice = ({ slice }: HighlightsSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for highlights_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HighlightsSlice;

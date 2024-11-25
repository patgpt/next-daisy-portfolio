import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Date`.
 */
export type DateProps = SliceComponentProps<Content.DateSlice>;

/**
 * Component for "Date" Slices.
 */
const Date = ({ slice }: DateProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for date (variation: {slice.variation}) Slices
    </section>
  );
};

export default Date;

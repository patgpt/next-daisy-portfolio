import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `JourneyBox`.
 */
export type JourneyBoxProps = SliceComponentProps<Content.JourneyBoxSlice>;

/**
 * Component for "JourneyBox" Slices.
 */
const JourneyBox = ({ slice }: JourneyBoxProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for journey_box (variation: {slice.variation})
      Slices
    </section>
  );
};

export default JourneyBox;

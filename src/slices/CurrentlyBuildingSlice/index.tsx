import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CurrentlyBuildingSlice`.
 */
export type CurrentlyBuildingSliceProps =
  SliceComponentProps<Content.CurrentlyBuildingSliceSlice>;

/**
 * Component for "CurrentlyBuildingSlice" Slices.
 */
const CurrentlyBuildingSlice = ({
  slice,
}: CurrentlyBuildingSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for currently_building_slice (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CurrentlyBuildingSlice;

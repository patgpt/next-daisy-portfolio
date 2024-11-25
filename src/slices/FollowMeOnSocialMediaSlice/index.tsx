import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FollowMeonSocialMediaSlice`.
 */
export type FollowMeonSocialMediaSliceProps =
  SliceComponentProps<Content.FollowMeonSocialMediaSliceSlice>;

/**
 * Component for "FollowMeonSocialMediaSlice" Slices.
 */
const FollowMeonSocialMediaSlice = ({
  slice,
}: FollowMeonSocialMediaSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for follow_meon_social_media_slice (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default FollowMeonSocialMediaSlice;

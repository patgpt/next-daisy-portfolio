import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LatestBlogs`.
 */
export type LatestBlogsProps = SliceComponentProps<Content.LatestBlogsSlice>;

/**
 * Component for "LatestBlogs" Slices.
 */
const LatestBlogs = ({ slice }: LatestBlogsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for latest_blogs (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LatestBlogs;

import Badge from "@/app/components/Badge";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TagCloud`.
 */
export type TagCloudProps = SliceComponentProps<Content.TagCloudSlice>;

/**
 * Component for "TagCloud" Slices.
 */
const TagCloud = ({ slice }: TagCloudProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-wrap gap-2"
    >
      {slice.primary.tag.map((tag, index) => (
        tag.tags && <Badge key={index} badgeText={tag.tags} variant="accent" size="lg" />
      ))}
    </section>
  );
};

export default TagCloud;


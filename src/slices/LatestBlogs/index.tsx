import CardGrid from "@/app/components/card/CardGrid";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LatestBlogs`.
 */
export type LatestBlogsProps = SliceComponentProps<Content.LatestBlogsSlice>;

/**
 * Component for "LatestBlogs" Slices.
 */
const LatestBlogs = async ({ slice }: LatestBlogsProps): Promise<JSX.Element> => {

  const client = createClient();

  const latestPosts = await client.getAllByType('blog_post', { pageSize: 3 }).then((response) => {
    console.log(response);
    return response;
  });



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="prose prose-lg max-w-none my-8">
        <h2>Latest Blog Posts</h2>
      </div>
      <CardGrid cards={latestPosts} />
    </section>
  );
};

export default LatestBlogs;

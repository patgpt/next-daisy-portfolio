import CardGrid from "./components/card/CardGrid";
import Hero from "./components/hero/Hero";

export default function Home() {
  const latestPosts = fetchLatestPosts();
  return (
    <main>
      <Hero />
      {/* Latest Blog Posts */}
      <section className="container mx-auto">
        <div className="prose prose-lg max-w-none my-8">
          <h2>Latest Blog Posts</h2>
        </div>
        <CardGrid cards={latestPosts} />
      </section>
      <section className="container mx-auto">
        <div className="prose prose-lg max-w-none my-8">
          <h2>Latest Projects</h2>
        </div>
        <CardGrid cards={latestPosts} />
      </section>
    </main>
  );
}

Home.displayName = "Home";

// Fetch latest blog posts from API or CMS
const fetchLatestPosts = () => [
  {
    image: {
      src: "https://via.placeholder.com/400x300",
      alt: "Placeholder Image"
    },
    title: "Blog Post Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna nec purus Nullam nec fermentum nulla.",
    button: {
      label: "Read More",
      href: "/blog-post"
    }
  },
  {
    image: {
      src: "https://via.placeholder.com/400x300",
      alt: "Placeholder Image"
    },
    title: "Blog Post Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna nec purus Nullam nec fermentum nulla.",
    button: {
      label: "Read More",
      href: "/blog-post"
    }
  },
  {
    image: {
      src: "https://via.placeholder.com/400x300",
      alt: "Placeholder Image"
    },
    title: "Blog Post Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna nec purus Nullam nec fermentum nulla.",
    button: {
      label: "Read More",
      href: "/blog-post"
    }
  },
]
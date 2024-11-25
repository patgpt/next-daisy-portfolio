import { posts } from '../../../../data/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = posts.find(post => post.slug === params.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Your Blog Name`,
        description: post.excerpt,
    };
}

export default function BlogPost({ params }: Props) {
    const post = posts.find(post => post.slug === params.slug);
    if (!post) notFound();

    const relatedPosts = posts
        .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
        .slice(0, 3);

    return (
        <article className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Hero Section */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
                <Image
                    src={post.image.url}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/50 to-transparent" />
            </div>

            {/* Post Header */}
            <header className="mb-8">
                <div className="flex gap-2 items-center mb-4">
                    {post.tags.map(tag => (
                        <span key={tag} className="badge badge-primary">{tag}</span>
                    ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <p className="text-xl text-base-content/70 mb-4">{post.excerpt}</p>
                <time className="text-sm text-base-content/60 font-mono">
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </time>
            </header>

            {/* Post Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown>
                    {post.content}
                </ReactMarkdown>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map(relatedPost => (
                            <Link
                                key={relatedPost.id}
                                href={`/blog/${relatedPost.slug}`}
                                className="card bg-base-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="card-body">
                                    <h3 className="card-title text-lg">{relatedPost.title}</h3>
                                    <p className="text-sm text-base-content/70 line-clamp-2">
                                        {relatedPost.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}

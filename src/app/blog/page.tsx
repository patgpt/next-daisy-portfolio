"use client"

import { posts } from '../../../data/posts';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BlogCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
    const directions = [
        { x: -50, y: 0 },
        { x: 50, y: 0 },
        { x: 0, y: 50 },
        { x: 0, y: -50 },
    ];

    const direction = directions[index % directions.length];

    return (
        <motion.div
            initial={{
                ...direction,
                opacity: 0,
                scale: 0.95
            }}
            animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
            }}
            className="group relative"
        >
            {children}
        </motion.div>
    );
};

const getBentoStyles = (index: number) => {
    switch (index) {
        case 0: // Featured post - large hero
            return 'md:col-span-3 md:row-span-2';
        case 1: // Secondary feature - wide
            return 'md:col-span-2 md:row-span-1';
        case 2: // Tall tile
            return 'md:col-span-1 md:row-span-2';
        case 3: // Wide tile
            return 'md:col-span-2 md:row-span-1';
        case 4: // Square tile
            return 'md:col-span-1 md:row-span-1';
        default: // Standard tiles
            return 'md:col-span-1 md:row-span-1';
    }
};

export const BlogListPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)] max-w-[1200px] mx-auto">
                {posts.map((post, index) => (
                    <BlogCard key={post.id} index={index}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className={`
                                card h-full bg-base-100 shadow-xl group/card overflow-hidden
                                hover:shadow-[0_0_30px_rgba(var(--p),0.3)]
                                transition-all duration-700
                                ${getBentoStyles(index)}
                            `}
                        >
                            <figure className="relative h-48">
                                <Image
                                    src={post.image.url}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                                    placeholder={post.image.blur ? "blur" : "empty"}
                                    blurDataURL={post.image.blur}
                                    sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                />
                            </figure>
                            <div className="card-body">
                                <div className="flex items-center gap-2 text-sm opacity-70">
                                    <time className="font-mono">{new Date(post.date).toLocaleDateString()}</time>
                                    <span>•</span>
                                    <span className="text-primary font-medium">{post.tags[0]}</span>
                                </div>
                                <h2 className={`
                                    card-title group-hover/card:text-primary transition-colors
                                    ${index === 0 ? 'text-3xl' : 'text-xl'}
                                `}>
                                    {post.title}
                                </h2>
                                <p className={`
                                    opacity-80
                                    ${index === 0 ? 'line-clamp-3' : 'line-clamp-2'}
                                    ${index === 0 ? 'text-base' : 'text-sm'}
                                `}>
                                    {post.excerpt}
                                </p>
                                <div className="card-actions justify-start mt-4">
                                    {post.tags.slice(0, index === 0 ? 4 : 2).map(tag => (
                                        <div key={tag} className="badge badge-outline">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </BlogCard>
                ))}
            </div>
        </div>
    );
};

BlogListPage.displayName = 'BlogListPage';
export default BlogListPage;
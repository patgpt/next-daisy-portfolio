"use client"

import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import { posts } from '../../../data/posts';
import { projects } from '../../../data/projects';
import Link from 'next/link';

const BentoBox = ({ className, children, index }: { className?: string, children: React.ReactNode, index: number }) => {
    const directions = [
        { x: -50, y: 0 },    // reduced distance for smoother motion
        { x: 50, y: 0 },
        { x: 0, y: 50 },
        { x: 0, y: -50 },
        { x: -50, y: -50 },
        { x: 50, y: 50 },
        { x: -50, y: 50 },
        { x: 50, y: -50 },
    ];

    const direction = directions[index % directions.length];

    return (
        <motion.div
            initial={{
                ...direction,
                opacity: 0,
                scale: 0.95 // reduced scale change for smoother appearance
            }}
            animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 0.5, // longer duration
                delay: index * 0.15, // slightly longer delay between items
                ease: [0.34, 1.56, 0.64, 1], // custom spring-like easing
                opacity: { duration: 0.8 }, // separate duration for opacity
                scale: { duration: 1 } // separate duration for scale
            }}
            className={`group relative p-6 rounded-xl backdrop-blur-xl bg-white/10 dark:bg-black/10 
                hover:shadow-[0_0_30px_rgba(var(--p),0.3)] 
                transition-all duration-700 ${className}`}
        >
            {/* Animated borders */}
            <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-primary opacity-0 
                    group-hover:animate-border-top blur-[2px] 
                    shadow-[0_0_10px_rgba(var(--p),0.8),0_0_20px_rgba(var(--p),0.4)]" />
                <div className="absolute right-0 inset-y-0 w-[3px] bg-primary opacity-0 
                    group-hover:animate-border-right blur-[2px] 
                    shadow-[0_0_10px_rgba(var(--p),0.8),0_0_20px_rgba(var(--p),0.4)]" />
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary opacity-0 
                    group-hover:animate-border-bottom blur-[2px] 
                    shadow-[0_0_10px_rgba(var(--p),0.8),0_0_20px_rgba(var(--p),0.4)]" />
                <div className="absolute left-0 inset-y-0 w-[3px] bg-primary opacity-0 
                    group-hover:animate-border-left blur-[2px] 
                    shadow-[0_0_10px_rgba(var(--p),0.8),0_0_20px_rgba(var(--p),0.4)]" />
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export const AboutPage = () => {
    const latestPost = posts[posts.length - 1]; // Get the most recent post
    const latestProject = projects[0]; // Gets the most recent project
    const inProgressProjects = projects.filter(p => p.status === 'in-progress');

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Profile Picture */}
                <BentoBox className="flex justify-center items-center" index={0}>
                    <div className="relative w-48 h-48 rounded-full overflow-hidden">
                        <Image
                            src="/pfp.webp"
                            alt="Profile picture"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </BentoBox>

                {/* Availability Status */}
                <BentoBox className="lg:col-span-2 flex items-center justify-between" index={1}>
                    <div className="flex items-center gap-2">
                        <span className="flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm">Currently available for new opportunities</span>
                    </div>
                    <button className="btn btn-primary">Get in Touch</button>
                </BentoBox>

                {/* Personal Story */}
                <BentoBox className="lg:col-span-2" index={2}>
                    <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                    <p>From my first Macintosh SE in 1988 to building custom PCs in the early 2000s,
                        and now leading major e-commerce projects—20 years of code, design, and exploration.</p>
                </BentoBox>

                {/* Social Links */}
                <BentoBox index={3}>
                    <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
                    <div className="flex gap-4">
                        <Link href="https://github.com/patgpt" className="text-3xl hover:text-primary" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </Link>
                        <Link href="https://twitter.com/AGIManifesto" className="text-3xl hover:text-primary" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </Link>
                        <Link href="https://linkedin.com/in/patgpt" className="text-3xl hover:text-primary" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </Link>
                    </div>
                </BentoBox>

                {/* Tech Stack */}
                <BentoBox index={4}>
                    <h2 className="text-xl font-bold mb-4">My Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind"].map((tech) => (
                            <span key={tech} className="badge badge-primary">{tech}</span>
                        ))}
                    </div>
                </BentoBox>

                {/* Current Projects - Updated */}
                <BentoBox index={5}>
                    <h2 className="text-xl font-bold mb-4">Currently Building</h2>
                    <ul className="space-y-3">
                        {inProgressProjects.map(project => (
                            <li key={project.id} className="flex items-start gap-3">
                                <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                                    <Image
                                        src={project.image.url}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">{project.title}</h3>
                                    <p className="text-sm text-base-content/70 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </BentoBox>

                {/* Personal Interests */}
                <BentoBox index={6}>
                    <h2 className="text-xl font-bold mb-4">Beyond Code</h2>
                    <p>Passionate about music production, dogs, and exploring new cities.
                        Currently planning to take my remote work international!</p>
                </BentoBox>

                {/* Latest Blog Post */}
                <BentoBox className="lg:col-span-2" index={7}>
                    <h2 className="text-xl font-bold mb-4">Latest Article</h2>
                    <Link href={`/blog/${latestPost.slug}`} className="group/link">
                        <div className="flex gap-4 items-start">
                            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src={latestPost.image.url}
                                    alt={latestPost.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold group-hover/link:text-primary transition-colors">
                                    {latestPost.title}
                                </h3>
                                <p className="text-sm text-base-content/70 line-clamp-2 mt-1">
                                    {latestPost.excerpt}
                                </p>
                                <div className="flex gap-2 mt-2">
                                    {latestPost.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="badge badge-sm">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                </BentoBox>

                {/* Latest Project */}
                <BentoBox className="lg:col-span-1" index={8}>
                    <h2 className="text-xl font-bold mb-4">Latest Project</h2>
                    <Link href={`/projects/${latestProject.slug}`} className="space-y-4 block group/link">
                        <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                            <Image
                                src={latestProject.image.url}
                                alt={latestProject.title}
                                fill
                                className="object-cover group-hover/link:scale-105 transition-transform duration-700"
                                placeholder={latestProject.image.blur ? "blur" : "empty"}
                                blurDataURL={latestProject.image.blur}
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold group-hover/link:text-primary transition-colors">
                                {latestProject.title}
                            </h3>
                            <p className="text-sm text-base-content/70 mt-1">
                                {latestProject.description}
                            </p>
                            <div className="flex gap-2 mt-2">
                                {latestProject.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="badge badge-sm">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                </BentoBox>
            </div>
        </div>
    )
}

AboutPage.displayName = 'AboutPage';
export default AboutPage;
"use client"

import { projects } from '../../../data/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
            }}
            className="group relative"
        >
            {children}
        </motion.div>
    );
};

export const ProjectsPage = () => {
    const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed' | 'planned'>('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.status === filter);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-4xl font-bold">Projects</h1>
                <div className="join">
                    {(['all', 'in-progress', 'completed', 'planned'] as const).map((status) => (
                        <button
                            key={status}
                            className={`join-item btn btn-sm ${filter === status ? 'btn-primary' : ''}`}
                            onClick={() => setFilter(status)}
                        >
                            {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} index={index}>
                        <Link href={`/projects/${project.slug}`} className="card bg-base-100 shadow-xl group/card overflow-hidden h-full flex flex-col">
                            <figure className="relative h-48">
                                <Image
                                    src={project.image.url}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-50" />
                            </figure>
                            <div className="card-body flex flex-col flex-grow">
                                <div className="flex justify-between items-start">
                                    <h2 className="card-title">{project.title}</h2>
                                    <span className={`badge ${project.status === 'completed' ? 'badge-success' :
                                            project.status === 'in-progress' ? 'badge-warning' :
                                                'badge-ghost'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-base-content/70 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="badge badge-outline">{tag}</span>
                                    ))}
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    {project.demoUrl && (
                                        <Link href={project.demoUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt className="mr-2" />Live Demo
                                        </Link>
                                    )}
                                    {project.githubUrl && (
                                        <Link href={project.githubUrl} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="mr-2" />GitHub
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </ProjectCard>
                ))}
            </div>
        </div>
    );
};

ProjectsPage.displayName = 'ProjectsPage';
export default ProjectsPage;
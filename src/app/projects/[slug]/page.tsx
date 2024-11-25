import { projects } from '../../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
    params: {
        slug: string;
    };
}

export default function ProjectPage({ params }: Props) {
    const project = projects.find(project => project.slug === params.slug);
    if (!project) notFound();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="relative w-full h-64 mb-8">
                <Image
                    src={project.image.url}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                    placeholder={project.image.blur ? "blur" : "empty"}
                    blurDataURL={project.image.blur}
                />
            </div>
            <p className="text-lg mb-6">{project.longDescription || project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="badge badge-primary">{tag}</span>
                ))}
            </div>
            <div className="flex gap-4">
                {project.demoUrl && (
                    <Link href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </Link>
                )}
                {project.githubUrl && (
                    <Link href={project.githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="mr-2" /> GitHub
                    </Link>
                )}
            </div>
        </div>
    );
}

ProjectPage.displayName = 'ProjectPage';
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TimelineItem } from '../../types/timeline';
import Badge from '../Badge';

export interface TimelineContentProps {
    item: TimelineItem;
    side?: 'left' | 'right';
}

export const TimelineContent = ({ item, side }: TimelineContentProps) => {
    if (!item.slug) {
        throw new Error(`Timeline item missing required slug property: ${JSON.stringify(item)}`);
    }

    return (
        <div 
            className={`md:w-[calc(50%-48px)] ${side === 'right' ? 'md:ml-auto' : ''}`}
            role="article"
        >
            <motion.div
                className="bg-base-200 rounded-lg p-4"
                layout="position"
                layoutId={`timeline-${item.slug}`}
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(var(--p)/0.5)",
                    transition: { duration: 0.2 }
                }}
            >
                <Link
                    href={`/experience/${item.slug}`}
                    className="block relative hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-labelledby={`title-${item.slug}`}
                >
                    {item.logo && (
                        <Image
                            src={item.logo}
                            alt={`${item.company} logo`}
                            width={48}
                            height={48}
                            className="absolute top-4 right-4 w-12 h-12 object-contain"
                        />
                    )}
                    <h3 id={`title-${item.slug}`} className="font-bold">{item.title}</h3>

                    {item.company && <h4 className="font-semibold text-primary">{item.company}</h4>}
                    {item.location && <p className="text-sm text-base-content/70">{item.location}</p>}
                    <p className="mt-2">{item.description}</p>
                    {/* Badges */}
                    {item.skills && (
                        <div 
                            className="flex flex-wrap gap-2 mt-4" 
                            role="list" 
                            aria-label={`Skills used at ${item.company}`}
                        >
                            {item.skills.map((skill) => (
                                <Badge 
                                    key={`${item.slug}-${skill}`} 
                                    badgeText={skill}
                                    aria-label={`Skill: ${skill}`}
                                />
                            ))}
                        </div>
                    )}
                    <div className="mt-4">
                        <button 
                            className="btn btn-primary btn-sm group-hover:btn-accent transition-colors"
                            aria-label={`Learn more about ${item.title} position at ${item.company}`}
                        >
                            <span className="sr-only">Learn more about this position</span>
                            Learn More →
                        </button>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
};
"use client";
import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '../../types/timeline';
import { TimelineDot } from './TimelineDot';
import { TimelineDate } from './TimelineDate';
import { TimelineContent } from './TimelineContent';

/**
 * Props interface for the TimelineItem component
 */
export interface TimelineItemProps {
    /** The timeline item data */
    item: TimelineItemType;
    /** The index of the item in the timeline list */
    index: number;
}

/**
 * Renders a single timeline item with animation effects
 * @param props - The component props
 * @returns A timeline item with date, dot, and content
 */
const TimelineItem = ({ item, index }: TimelineItemProps) => {
    return (
        <motion.li
            className="group mb-16 relative"
            role="listitem"
            aria-label={`Timeline entry for ${item.title} at ${item.company}`}
        >
            <div className="flex flex-col md:block">
                <TimelineDate date={item.date} side={item.side} />
                <TimelineDot />
                <TimelineContent item={item} side={item.side} />

                <motion.div
                    className={`hidden md:block absolute top-2.5 h-px bg-primary/20 ${item.side === 'right' ? 'right-1/2 w-[calc(25%-24px)]' : 'left-1/2 w-[calc(25%-24px)]'
                        }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                />
            </div>
        </motion.li>
    );
};

export default TimelineItem;
"use client"

import React from 'react';
import { TimelineProps } from '../../types/timeline';

import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <motion.div
      className="container max-w-6xl mx-auto px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block -translate-x-1/2" />
      <ul className="relative">
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </ul>
    </motion.div>
  );
};

export default Timeline;
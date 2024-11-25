import React from 'react';
import { TimelineProps } from '../types/timeline';
import TimelineItem from './TimelineItem';

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="container mx-auto">
      <ul className="timeline timeline-vertical">
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
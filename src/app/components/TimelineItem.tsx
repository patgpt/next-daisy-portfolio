
import Image from 'next/image';
import { TimelineItem as TimelineItemType } from '../types/timeline';

interface TimelineItemProps {
  item: TimelineItemType;
}

const TimelineItem = ({ item }: TimelineItemProps) => {
  return (
    <li>
      <div className={`timeline-start timeline-box relative ${item.side === 'right' ? 'timeline-end' : ''}`}>
        {item.logo && (
          <div className="absolute top-4 right-4 w-12 h-12">
            <Image 
              src={item.logo} 
              alt={`${item.company} logo`} 
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        )}
        <h3 className="font-bold">{item.title}</h3>
        {item.company && <h4 className="font-semibold text-primary">{item.company}</h4>}
        {item.location && <p className="text-sm text-base-content/70">{item.location}</p>}
        <p className="text-sm text-base-content/70">{item.date}</p>
        <p className="mt-2">{item.description}</p>
      </div>
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
        </svg>
      </div>
    </li>
  );
};

export default TimelineItem;
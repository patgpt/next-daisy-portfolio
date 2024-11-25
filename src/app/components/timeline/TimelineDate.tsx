interface TimelineDateProps {
    date: string;
    side?: 'left' | 'right';
}

export const TimelineDate = ({ date, side }: TimelineDateProps) => (
    <>
        <div className="md:hidden mb-4 text-lg font-semibold text-primary">
            {date}
        </div>
        <div className={`hidden md:block absolute ${side === 'left' ? 'left-[calc(50%+32px)]' : 'right-[calc(50%+32px)]'
            } top-0 text-lg font-semibold text-primary`}>
            {date}
        </div>
    </>
);

TimelineDate.displayName = 'TimelineDate';
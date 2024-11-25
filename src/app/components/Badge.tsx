interface BadgeProps {
    badgeText: string;
    className?: string;
    'aria-label'?: string;
}

const Badge = ({ badgeText, className = '', ...props }: BadgeProps) => {
    return (
        <span
            className={`badge badge-primary badge-sm ${className}`}
            role="listitem"
            {...props}
        >
            {badgeText}
        </span>
    );
};

export default Badge;
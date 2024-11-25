import { memo } from 'react';

/**
 * Props for the Badge component
 * @interface BadgeProps
 * @extends {React.HTMLAttributes<HTMLSpanElement>}
 */
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Text to display in the badge */
    badgeText: string;
    /** Visual style variant of the badge */
    variant?: 'primary' | 'secondary' | 'accent';
    /** Size of the badge */
    size?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes */
    className?: string;
}

/**
 * Displays a badge with customizable styling
 * @param {BadgeProps} props - The component props
 * @returns {JSX.Element} Badge component
 */
const Badge = memo(({
    badgeText,
    variant = 'primary',
    size = 'sm',
    className = '',
    ...props
}: BadgeProps) => {
    const baseClassName = `badge badge-${variant} badge-${size}`;

    return (
        <span
            className={`${baseClassName} ${className}`.trim()}
            role="listitem"
            {...props}
        >
            {badgeText}
        </span>
    );
});

Badge.displayName = 'Badge';

export default Badge;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  badgeText: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = ({ 
  badgeText, 
  variant = 'primary',
  size = 'sm',
  className = '', 
  ...props 
}: BadgeProps) => {
  return (
    <span
      className={`badge badge-${variant} badge-${size} ${className}`}
      role="listitem"
      {...props}
    >
      {badgeText}
    </span>
  );
};

export default Badge;
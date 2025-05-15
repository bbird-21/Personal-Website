// src/components/Button.jsx
import '../styles/components/Button.css';

export default function Button({
  text,
  icon,
  alt,
  onClick,
  variant = 'default',
  btnClassName = '',
  iconClassName = '',
  ariaLabel = ''
}) {
  return (
    <button
      type="button"
      className={`${variant} ${btnClassName}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && <img src={icon} alt={alt} className={` ${iconClassName}`} />}
      {text}
    </button>
  );
}

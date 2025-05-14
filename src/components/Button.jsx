// src/components/Button.jsx
import '../styles/components/Button.css';

export default function Button({
  text,
  icon,
  onClick,
  variant = 'default',
  btnClassName = '',
  iconClassName = ''
}) {
  return (
    <button
      type="button"
      className={`${variant} ${btnClassName}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" className={` ${iconClassName}`} />}
      {text}
    </button>
  );
}

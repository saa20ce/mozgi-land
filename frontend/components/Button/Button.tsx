import styles from './button.module.scss'
import clsx from "clsx";

type ButtonProps = {
    text: string;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
  };
  
  const Button = ({ text, active, disabled, onClick}: ButtonProps) => {
    const classNames = clsx(
      styles.button,
      { [styles.active]: active },
      { [styles.disabled]: disabled }
    );
    
    return (
      <button
        className={classNames}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  
import styles from './button.module.scss'
import clsx from "clsx";

type ButtonProps = {
    text: string;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    className?:string;
    type?: "default" | "card" | "portfolio" | "mobilemenu"; 
    onClick?: () => void;
  };
  
  const Button = ({ text, active,className, disabled,type="default",onClick,}: ButtonProps) => {
    const classNames = clsx(
      styles.button,
      styles[type],
      { [styles.active]: active },
      { [styles.disabled]: disabled },
      { [styles.buttoncard]: type === "card" },
      {[styles.porfoliobutton]: type === "portfolio"},
      {[styles.mobilemenubutton]: type === "mobilemenu"},
      className,
      
      
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
  
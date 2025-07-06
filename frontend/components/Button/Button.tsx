// import styles from './button.module.scss'
// import clsx from "clsx";

// type ButtonProps = {
//   text: string;
//   active?: boolean;
//   disabled?: boolean;
//   href?: string;
//   className?: string;
//   type?: "default" | "card" | "portfolio" | "mobilemenu" | "openbutton" | "feedback";
//   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
// };

// const Button = ({ text, active, className, disabled, type = "default", onClick, }: ButtonProps) => {
//   const classNames = clsx(
//     styles.button,
//     styles[type],
//     { ['bg-[f26666]']: active },
//     { [styles.disabled]: disabled },
//     { [styles.buttoncard]: type === "card" },
//     { [styles.porfoliobutton]: type === "portfolio" },
//     { [styles.mobilemenubutton]: type === "mobilemenu" },
//     { [styles.tabletmenubutton]: type === "openbutton" },
//     { [styles.feedbackbutton]: type === 'feedback' },

//     className,

//   );

//   return (
//     <button
//       className={classNames}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;
import clsx from "clsx";

type ButtonProps = {
  text: string;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  className?: string;
  type?: "default" | "service" | "portfolio" | "mobilemenu" | "openbutton" | "feedback" | "desktopmenu";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ text, active, className, disabled, type = "default", onClick }: ButtonProps) => {
  const classNames = clsx(
    "px-6  border-none text-white-custom font-medium leading-[18px] hover:cursor-pointer",
    type === "desktopmenu" && "lg:w-[326px] w-full h-[52px] px-6 rounded-[24px] border-none bg-[#3B404F] text-white text-[18px] font-semibold leading-[18px] hover:cursor-pointer hover:bg-[var(--button-hover)]",
    type === "service" && "lg:w-[125px] w-[105px] h-[40px] text-base bg-[#F6F6F652] hover:bg-[#344F7350] rounded-[12px]  flex items-center justify-center text-center p-3 self-end",
    type === "portfolio" && "lg:w-[180px] w-[100px] h-[40px] text-base text-color-white bg-[#3B404F] rounded-[12px] flex items-center justify-center text-center p-2 hover:bg-[#344f7353]",
    type === "mobilemenu" && "w-full h-[52px] rounded-[24px] text-base bg-[#3B404F] flex items-center justify-center text-center",
    type === "openbutton" && "w-full h-[52px] rounded-[24px] flex items-center justify-center text-center text-[18px]",
    type === "feedback" && "w-full lg:h-[52px] h-[46px] text-[18px] rounded-[24px]",
    active && "bg-[f26666]",
    disabled && "bg-[var(--button)] opacity-50 cursor-not-allowed",
    type === "portfolio" && active && "bg-[#344f7353] text-white",
    type === "mobilemenu" && active && "bg-[var(--red)]",
    type === "feedback" && active && "bg-[var(--red)]",
     type === "desktopmenu" && active && "bg-[var(--red)]",
    type === "openbutton" && active && "bg-[var(--red)]",
    className
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
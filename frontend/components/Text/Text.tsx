// frontend/components/Text.tsx
import React from "react";
import clsx from "clsx";
type TextProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "white" | "gray" | "black" | "blue" | "red" | "green";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  href?: string;
};

const Text = ({
  children,
  className = "",
  as: Tag = "p",
  size = "md",
  color = "white",
  weight = "normal",
  href,
}: TextProps) => {
  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl font-semibold",
  };

  const textColor = {
    white: "text-white",
    gray: "text-gray-400",
    black: "text-black",
    blue: "text-blue-500",
    red: "text-red-500",
    green: "text-green-500",
  };

  const fontWeight = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };
  if (href) {
    return (
      <a
        href={href}
        className={clsx(
          textSize[size],
          className,
          "text-blue-400 hover:underline w-fit"
        )}
      >
        {children}
      </a>
    );
  }
  return (
    <Tag
      className={clsx(
        textSize[size],
        textColor[color],
        fontWeight[weight],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;

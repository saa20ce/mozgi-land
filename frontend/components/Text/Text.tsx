// frontend/components/Text.tsx
import React from "react";
import clsx from "clsx";
import Link from "next/link";
type TextProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: "msm" | "sm" | "md" | "lg" | "xl" | "xxl";
  color?: "white" | "gray" | "black" | "blue" | "red" | "green" | 'white-custom';
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  href?: string;
  locale?: string;
};

const Text = ({
  children,
  className = "",
  as: Tag = "p",
  size = "md",
  color = "white-custom",
  weight = "normal",
  href,
  locale
}: TextProps) => {
  const textSize = {
    msm: "text-[15px]",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl font-semibold",
    xxl: "text-[26px]"
  };

  const textColor = {
    white: "text-white",
    gray: "text-gray-400",
    black: "text-black",
    blue: "text-blue-500",
    red: "text-red-500",
    green: "text-green-500",
    'white-custom': 'text-white-custom',
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
      <Link
        href={href}
        locale={locale}
        className={clsx(
          textSize[size],
          className,
          "text-blue-400 w-fit"
        )}
      >
        {children}
      </Link>
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

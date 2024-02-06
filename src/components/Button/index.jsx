import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[3px]",
  circle: "rounded-[50%]",
  square: "rounded-none",
};
const variants = {
  fill: {
    orange_300: "bg-orange-300 text-white-A700",
    yellow_900: "bg-yellow-900 text-white-A700",
    light_blue_900: "bg-light_blue-900 text-white-A700",
    deep_orange_A200: "bg-deep_orange-A200 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
  },
  outline: { white_A700: "border border-solid border-white-A700" },
};
const sizes = { xs: "p-2", sm: "p-3", md: "p-[15px]", lg: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "orange_300",
    "yellow_900",
    "light_blue_900",
    "deep_orange_A200",
    "white_A700",
  ]),
};

export { Button };

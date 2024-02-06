import React from "react";

const sizeClasses = {
  txtInterBold26: "font-bold font-inter",
  txtInterBold22: "font-bold font-inter",
  txtPoppinsRegular26: "font-normal font-poppins",
  txtInterBold23: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsLight18DeeporangeA200: "font-light font-poppins",
  txtInterRegular24: "font-inter font-normal",
  txtInterMedium19: "font-inter font-medium",
  txtInterBold22DeeporangeA200: "font-bold font-inter",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtInterMedium55: "font-inter font-medium",
  txtInterBold17: "font-bold font-inter",
  txtPoppinsBold24DeeporangeA200: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsRegular23: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterMedium20: "font-inter font-medium",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtPoppinsLight18Bluegray900: "font-light font-poppins",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular17: "font-inter font-normal",
  txtInterBold42DeeporangeA200: "font-bold font-inter",
  txtPoppinsLight18: "font-light font-poppins",
  txtInterRegular109WhiteA700: "font-inter font-normal",
  txtPoppinsLight10: "font-light font-poppins",
  txtInterMedium19WhiteA700: "font-inter font-medium",
  txtInterMedium48: "font-inter font-medium",
  txtInterLight18: "font-inter font-light",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtInterBold42: "font-bold font-inter",
  txtInterRegular16Black900: "font-inter font-normal",
  txtPoppinsRegular109: "font-normal font-poppins",
  txtPoppinsBold26: "font-bold font-poppins",
  txtInterRegular14Yellow900: "font-inter font-normal",
  txtInterRegular109: "font-inter font-normal",
  txtInterBold37: "font-bold font-inter",
  txtInterMedium35: "font-inter font-medium",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsBold24: "font-bold font-poppins",
  txtInterBold73: "font-bold font-inter",
  txtPoppinsRegular17Bluegray900: "font-normal font-poppins",
  txtPoppinsMedium45: "font-medium font-poppins",
  txtPoppinsSemiBold42: "font-poppins font-semibold",
  txtInterLight20: "font-inter font-light",
  txtInterMedium40: "font-inter font-medium",
  txtInterMedium20Gray90001: "font-inter font-medium",
  txtInterRegular36: "font-inter font-normal",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

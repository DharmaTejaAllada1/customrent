import React from "react";

const sizeClasses = {
  txtInterBold25: "font-bold font-inter",
  txtInterBold26: "font-bold font-inter",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular26: "font-normal font-poppins",
  txtInterBold22: "font-bold font-inter",
  txtInterBold23: "font-bold font-inter",
  txtPoppinsBold36: "font-bold font-poppins",
  txtInterBold24: "font-bold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtInterMedium19: "font-inter font-medium",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold42: "font-bold font-poppins",
  txtInterMedium55: "font-inter font-medium",
  txtInterBold17: "font-bold font-inter",
  txtPoppinsBold24DeeporangeA200: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsRegular23: "font-normal font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtPoppinsSemiBold26: "font-poppins font-semibold",
  txtPoppinsMedium30WhiteA700: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterMedium20: "font-inter font-medium",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular17: "font-inter font-normal",
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsMedium45Orange700: "font-medium font-poppins",
  txtPoppinsLight18: "font-light font-poppins",
  txtInterRegular109WhiteA700: "font-inter font-normal",
  txtPoppinsLight10: "font-light font-poppins",
  txtInterMedium19WhiteA700: "font-inter font-medium",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtInterBold22WhiteA700: "font-bold font-inter",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtInterBold42: "font-bold font-inter",
  txtInterBold25WhiteA700: "font-bold font-inter",
  txtInterRegular16Black900: "font-inter font-normal",
  txtPoppinsRegular109: "font-normal font-poppins",
  txtInterRegular49: "font-inter font-normal",
  txtPoppinsBold26: "font-bold font-poppins",
  txtInterRegular109: "font-inter font-normal",
  txtPoppinsRegular17WhiteA700: "font-normal font-poppins",
  txtInterBold36: "font-bold font-inter",
  txtInterMedium35: "font-inter font-medium",
  txtInterBold37: "font-bold font-inter",
  txtPoppinsSemiBold41: "font-poppins font-semibold",
  txtPoppinsBold22: "font-bold font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtInterBold73: "font-bold font-inter",
  txtPoppinsMedium45: "font-medium font-poppins",
  txtInterMedium40: "font-inter font-medium",
  txtPoppinsRegular20Gray700: "font-normal font-poppins",
  txtPoppinsBold36Black900: "font-bold font-poppins",
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

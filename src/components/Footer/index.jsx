import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="md:h-[1237px] h-[589px] sm:h-[593px] mt-1 relative w-full">
          <div className="md:h-[1233px] h-[589px] m-auto w-full">
            <div className="md:h-[1233px] h-[589px] m-auto w-full">
              <Img
                className="h-[589px] m-auto object-cover w-full"
                src="images/img_image31.png"
                alt="imageThirtyOne"
              />
              <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start left-[9%] my-auto w-[76%]">
                <div className="flex md:flex-col flex-row md:gap-[55px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-6 justify-start w-[24%] md:w-full">
                    <div className="flex flex-row items-end justify-between w-[84%] md:w-full">
                      <Img
                        className="h-[38px] md:h-auto mt-[5px] object-cover"
                        src="images/img_imageremovebgpreview.png"
                        alt="imageremovebgpr"
                      />
                      <Text
                        className="sm:text-[33px] md:text-[35px] text-[37px] text-white-A700"
                        size="txtInterBold37"
                      >
                        in
                      </Text>
                    </div>
                    <Text
                      className="leading-[46.00px] md:ml-[0] ml-[23px] text-white-A700 text-xl w-[91%] sm:w-full"
                      size="txtPoppinsRegular20WhiteA700"
                    >
                      There are many variations of passages of Lorem Ipsum .{" "}
                    </Text>
                  </div>
                  <ul className="flex md:flex-1 flex-col items-start justify-start w-[72%] md:w-full common-column-list">
                    <li>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-deep_orange-A200"
                            size="txtPoppinsBold26"
                          >
                            WHAT WE DO
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterBold22WhiteA700"
                          >
                            ______
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[130px] md:mt-0 mt-0.5">
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-deep_orange-A200"
                            size="txtPoppinsBold26"
                          >
                            SITMAP
                          </Text>
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-deep_orange-A200"
                            size="txtInterBold26"
                          >
                            ______
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[151px] md:mt-0 mt-0.5">
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-deep_orange-A200"
                            size="txtPoppinsBold26"
                          >
                            CONTACT
                          </Text>
                          <Text
                            className="text-[22px] text-deep_orange-A200 sm:text-lg md:text-xl"
                            size="txtInterBold22"
                          >
                            ______
                          </Text>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-2.5">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Home LIGHTING
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[156px] text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Home
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[182px] text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Address
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-3">
                        <Text
                          className="md:mt-0 mt-[3px] text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Landscape Design
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[125px] text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          About
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[182px] text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          63 Nelson Base.Flordia
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[18px]">
                        <Text
                          className="mt-0.5 text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Floor Planning
                        </Text>
                        <Text
                          className="mb-0.5 text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Service
                        </Text>
                        <Text
                          className="mt-0.5 text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Phone
                        </Text>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="flex flex-col items-start justify-start w-[94%] md:w-full common-column-list">
                  <li>
                    <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                      <li>
                        <Text
                          className="md:mt-0 mt-1.5 sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                          size="txtInterBold23"
                        >
                          INTENAX-
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[5px] md:mt-0 mt-2 text-[17px] text-white-A700"
                          size="txtPoppinsRegular17WhiteA700"
                        >
                          Design&Architect
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[23px] md:mt-0 my-1 text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Interior Design
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[166px] md:mt-0 mt-2.5 text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          Our Prajects
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mb-2.5 md:ml-[0] ml-[120px] text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          +1(234) 501 8607
                        </Text>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[13px]">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        All rights reserved
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[421px] md:mt-0 mt-0.5 text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        Latest News
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[123px] text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        Email;
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-start justify-between md:ml-[0] ml-[599px] mt-[7px]">
                      <Text
                        className="mt-[11px] text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        Contact Us
                      </Text>
                      <Text
                        className="mb-[11px] text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        Info@intenax.net
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[9%] pb-[65px] md:px-10 sm:px-5 px-[65px] top-[22%] w-[21%]">
              <div className="flex flex-col items-center justify-start mb-[98px] w-[32%] md:w-full">
                <Img
                  className="h-8 md:h-auto object-cover w-full"
                  src="images/img_imageremovebgpreview_32x52.png"
                  alt="imageremovebgpr_One"
                />
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[37px] left-[16%] object-cover top-[21%] w-[5%]"
            src="images/img_imageremovebgpreview_37x61.png"
            alt="imageremovebgpr_Two"
          />
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

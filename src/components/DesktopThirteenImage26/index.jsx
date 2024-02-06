import React from "react";

import { Img, Input, Text } from "components";

const DesktopThirteenImage26 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[49px] items-start justify-start md:ml-[0] ml-[726px] mr-[154px]">
          <Text
            className="leading-[31.00px] text-lg text-white-A700 w-[95%] sm:w-full"
            size="txtPoppinsRegular18WhiteA700"
          >
            {props?.descriptiontext}
          </Text>
          <Text
            className="leading-[31.00px] ml-1 md:ml-[0] text-lg text-white-A700 w-full"
            size="txtPoppinsRegular18WhiteA700"
          >
            {props?.descriptiononetext}
          </Text>
        </div>
        <Img
          className="sm:h-auto h-px mt-[643px] object-cover w-full"
          src="defaultNoData.png"
          alt="imagetwentysix"
        />
        <div className="md:h-[1070px] h-px md:ml-[0] ml-[246px] mr-[370px] mt-80 relative w-[58%] md:w-full">
          <div className="h-[750px] mx-auto w-full">
            <div className="absolute bg-white-A700 h-[750px] inset-[0] justify-center m-auto w-full"></div>
            <Text
              className="absolute h-max inset-y-[0] left-[19%] my-auto text-2xl md:text-[22px] text-deep_orange-A200 sm:text-xl"
              size="txtInterBold24"
            >
              {props?.stackrectanglefiftyf}
            </Text>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[145px] justify-end right-[1%] top-full w-[83%]">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-deep_orange-A200"
              size="txtInterBold42DeeporangeA200"
            >
              {props?.solutionsthatfitonetext}
            </Text>
            <div className="flex flex-col md:gap-10 gap-[227px] items-start justify-start md:ml-[0] ml-[17px] mr-[120px] w-4/5 md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  {props?.innovationtext}
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-deep_orange-A200 sm:text-xl"
                  size="txtPoppinsBold24DeeporangeA200"
                >
                  {props?.assurencetext}
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  {props?.precisiontext}
                </Text>
              </div>
              <Input
                name="groupfiftyfour"
                placeholder="LEARN MORE"
                className="font-medium font-poppins leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
                wrapClassName="rounded-md w-[41%]"
                color="deep_orange_A200"
                size="sm"
                variant="fill"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopThirteenImage26.defaultProps = {
  stackrectanglefiftyf: "_____________",
  solutionsthatfitonetext: "Solutions That Fits Every Status .",
  innovationtext: "INNOVATION",
  assurencetext: "ASSURENCE",
  precisiontext: "PRECISION",
};

export default DesktopThirteenImage26;

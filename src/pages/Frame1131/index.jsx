import React from "react";

import { useNavigate } from "react-router-dom";

import { registerDeviceAuth } from "service/api";

import { Button, Img, Line, Text } from "components";

const Frame1131Page = () => {
  const [register, setRegister] = React.useState();
  const navigate = useNavigate();

  function loginOne() {
    const req = { data: { username: "34", password: "3243", email: "134" } };

    registerDeviceAuth(req)
      .then((res) => {
        setRegister(res?.data);

        navigate("/desktopthirteen");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start p-[109px] md:px-10 sm:px-5 w-full">
          <Img
            className="md:flex-1 h-[805px] sm:h-auto md:ml-[0] ml-[41px] object-cover w-[47%] md:w-full"
            alt="rectangle6846"
            src={register?.status}
          />
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[39px] md:px-5 rounded-lg w-[43%] md:w-full">
            <div className="flex flex-col gap-11 justify-start mb-[18px] ml-1 md:ml-[0] w-[83%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[104px] items-start justify-start md:ml-[0] ml-[164px]">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-yellow-900"
                  size="txtInterMedium40"
                >
                  LOGO
                </Text>
                <Text
                  className="ml-1 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-yellow-900"
                  size="txtInterMedium35"
                >
                  Login
                </Text>
              </div>
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row gap-[18px] items-start justify-start w-[34%] md:w-full">
                  <Img
                    className="h-[18px] w-[19px]"
                    src="images/img_lock_gray_900.svg"
                    alt="lock"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    User Name
                  </Text>
                </div>
                <Line className="bg-gray-500 h-px ml-1 md:ml-[0] mt-[33px] rounded-[1px] w-[99%]" />
                <div className="flex flex-row gap-[17px] items-start justify-start mt-[42px] w-[31%] md:w-full">
                  <Img
                    className="h-[21px] w-[21px]"
                    src="images/img_location.svg"
                    alt="location"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    Password
                  </Text>
                </div>
                <Line className="bg-gray-500 h-px ml-1 md:ml-[0] mt-[45px] rounded-[1px] w-[99%]" />
                <Text
                  className="md:ml-[0] ml-[258px] mt-2.5 text-black-900 text-xs"
                  size="txtInterRegular12"
                >
                  Forgot Password ?
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[112px] md:ml-[0] ml-[138px] mr-[113px] mt-[37px] rounded-sm text-center text-xl"
                  onClick={() => {
                    loginOne();
                  }}
                  shape="round"
                  color="yellow_900"
                  size="xs"
                  variant="fill"
                >
                  Login{" "}
                </Button>
                <Text
                  className="md:ml-[0] ml-[184px] mt-[13px] text-black-900 text-xs"
                  size="txtInterRegular12"
                >
                  OR
                </Text>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[155px] mt-[13px] text-gray-900 text-xl"
                >
                  <Text size="txtInterMedium20">Sign Up</Text>
                </a>
                <Text
                  className="md:ml-[0] ml-[131px] mt-[52px] text-black-900 text-xs"
                  size="txtInterRegular12"
                >
                  Or Login with Googgle
                </Text>
                <Img
                  className="h-9 md:ml-[0] ml-[177px] mt-7 w-9"
                  src="images/img_google.svg"
                  alt="google"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame1131Page;

import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const DesktopThirteenPage = () => {
  const navigate = useNavigate();

  const [group683value, setGroup683value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 font-inter h-[12832px] mx-auto relative w-full">
        <div className="absolute h-[2855px] sm:h-[3157px] md:h-[3504px] inset-x-[0] max-w-[1154px] mx-auto md:px-5 top-[17%] w-full">
          <div className="absolute flex flex-col font-poppins gap-[35px] inset-x-[0] justify-start mx-auto top-[0] w-full">
            <div className="h-[2357px] sm:h-[3090px] md:h-[3437px] relative w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mr-2.5 w-full">
                    <div className="md:h-[442px] h-[452px] relative w-[33%] md:w-full">
                      <div className="absolute bg-blue_gray-100 h-[442px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-[442px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_image17.png"
                        alt="imageSeventeen"
                      />
                    </div>
                    <div className="md:h-[442px] h-[452px] relative w-[33%] md:w-full">
                      <div className="absolute bg-blue_gray-100 h-[442px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-[442px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_image18.png"
                        alt="imageEighteen"
                      />
                    </div>
                    <div className="md:h-[442px] h-[452px] relative w-[33%] md:w-full">
                      <div className="absolute bg-blue_gray-100 h-[442px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-[442px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_image19.png"
                        alt="imageNineteen"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[46px] mt-[23px] w-[93%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[62%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-A200"
                          size="txtPoppinsMedium30"
                        >
                          Commited to Work
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-A200"
                          size="txtPoppinsMedium30"
                        >
                          Live Detaild ideas
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[91%] md:w-full">
                        <Text
                          className="text-[17px] text-blue_gray-900"
                          size="txtPoppinsRegular17"
                        >
                          duo hinc ominc maluisst
                        </Text>
                        <Text
                          className="text-[17px] text-blue_gray-900"
                          size="txtPoppinsRegular17"
                        >
                          duo hinc ominc maluisst
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start md:mt-0 mt-[3px]">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-A200"
                        size="txtPoppinsMedium30"
                      >
                        With Signiture Style{" "}
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[21px] text-[17px] text-blue_gray-900"
                        size="txtPoppinsRegular17"
                      >
                        duo hinc ominc maluisst
                      </Text>
                    </div>
                  </div>
                  <div className="font-inter md:gap-10 gap-[333px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between md:ml-[0] ml-[150px] mt-[19px] w-[73%] md:w-full">
                    <Text
                      className="mb-3.5 text-[17px] text-deep_orange-A200 w-full"
                      size="txtInterBold17"
                    >
                      _______
                    </Text>
                    <Text
                      className="mb-3.5 text-[17px] text-deep_orange-A200 w-full"
                      size="txtInterBold17"
                    >
                      _______
                    </Text>
                    <Text
                      className="mt-3.5 text-[17px] text-deep_orange-A200 w-full"
                      size="txtInterBold17"
                    >
                      _______
                    </Text>
                  </div>
                  <div className="h-[598px] md:h-[884px] md:ml-[0] ml-[486px] mt-[286px] relative w-[58%] md:w-full">
                    <div className="bg-blue_gray-100 h-[594px] m-auto w-[99%]"></div>
                    <Img
                      className="absolute h-[598px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image24.png"
                      alt="imageTwentyFour"
                    />
                  </div>
                  <Text
                    className="mt-[138px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-900"
                    size="txtPoppinsRegular23"
                  >
                    Storey of intenax
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[724px] mt-[659px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
                    size="txtPoppinsRegular26"
                  >
                    Store of intenax
                  </Text>
                </div>
              </div>
              <Text
                className="absolute bottom-[27%] left-[0] sm:text-[32px] md:text-[38px] text-[42px] text-deep_orange-A200"
                size="txtPoppinsBold42"
              >
                POWER OF Decysions.
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[696px] sm:text-[32px] md:text-[38px] text-[42px] text-deep_orange-A200"
              size="txtPoppinsBold42"
            >
              Stength of plannig .
            </Text>
          </div>
          <Text
            className="absolute bottom-[16%] right-[40%] sm:text-[32px] md:text-[38px] text-[42px] text-deep_orange-A200"
            size="txtInterBold42"
          >
            ____
          </Text>
          <div className="absolute flex flex-col font-poppins md:gap-10 gap-[193px] h-max inset-[0] justify-center m-auto w-[99%]">
            <Text
              className="md:ml-[0] ml-[385px] sm:text-[35px] md:text-[41px] text-[45px] text-orange-700"
              size="txtPoppinsMedium45Orange700"
            >
              Our Properties
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Text className="text-gray-700 text-xl" size="txtPoppinsMedium20">
                BUY A HOME
              </Text>
              <Text
                className="mt-[5px] sm:text-[31px] md:text-[37px] text-[41px] text-black-900 w-[39%] sm:w-full"
                size="txtPoppinsSemiBold41"
              >
                Find, Buy & Own Your Dream Home
              </Text>
              <Text
                className="leading-[38.00px] md:ml-[0] ml-[5px] text-blue_gray-900 text-lg w-[38%] sm:w-full"
                size="txtPoppinsLight18"
              >
                Explore from Apartments, land, builder floors, villas and more
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[175px] md:ml-[0] ml-[5px] mt-[11px] text-center text-lg"
                shape="round"
                color="light_blue_900"
                size="sm"
                variant="fill"
              >
                Explore Buying
              </Button>
              <div className="h-[498px] md:h-[889px] mt-[391px] relative w-full">
                <Img
                  className="absolute h-[498px] inset-y-[0] my-auto object-cover right-[0] w-[51%]"
                  src="images/img_rectangle52.png"
                  alt="rectangleFiftyTwo"
                />
                <div className="absolute bg-gray-800_01 flex flex-col gap-[9px] h-max inset-y-[0] items-start justify-start left-[0] my-auto p-9 sm:px-5">
                  <Text
                    className="leading-[34.00px] md:ml-[0] ml-[33px] text-lg text-white-A700 w-[90%] sm:w-full"
                    size="txtPoppinsRegular18"
                  >
                    t is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as
                  </Text>
                  <Text
                    className="leading-[35.00px] mb-[5px] ml-9 md:ml-[0] text-lg text-white-A700 w-[94%] sm:w-full"
                    size="txtPoppinsRegular18"
                  >
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially un
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex font-poppins inset-x-[0] mx-auto w-full">
            <Img
              className="h-[498px] my-auto object-cover w-[51%]"
              src="images/img_image25.png"
              alt="imageTwentyFive"
            />
            <div className="bg-gray-800 flex flex-col gap-[49px] items-start justify-start ml-[-101px] my-auto p-1 z-[1]">
              <Text
                className="leading-[31.00px] md:ml-[0] ml-[97px] mt-5 text-lg text-white-A700 w-[81%] sm:w-full"
                size="txtPoppinsRegular18"
              >
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as
              </Text>
              <Text
                className="leading-[31.00px] mb-[33px] md:ml-[0] ml-[101px] text-lg text-white-A700 w-[85%] sm:w-full"
                size="txtPoppinsRegular18"
              >
                it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially un
              </Text>
            </div>
          </div>
        </div>
        <Text
          className="absolute left-[4%] sm:text-[32px] md:text-[38px] text-[42px] text-deep_orange-A200 top-[30%]"
          size="txtInterBold42"
        >
          ____
        </Text>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex flex-col md:px-5 relative w-[23%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start mx-auto pb-2 w-full">
                <div className="h-[428px] relative w-full">
                  <Img
                    className="h-[428px] m-auto object-cover w-full"
                    src="images/img_image27.png"
                    alt="imageTwentySeven"
                  />
                  <Img
                    className="absolute h-[428px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image27.png"
                    alt="imageThirtyTwo"
                  />
                </div>
              </div>
              <Img
                className="h-[436px] mt-[-7px] mx-auto object-cover w-full z-[1]"
                src="images/img_rectangle60.png"
                alt="rectangleSixty"
              />
            </div>
            <div className="h-[868px] md:px-5 relative w-[26%] md:w-full">
              <Img
                className="h-[868px] m-auto object-cover w-full"
                src="images/img_rectangle61.png"
                alt="rectangleSixtyOne"
              />
              <Img
                className="absolute h-[868px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle61.png"
                alt="rectangle6840"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[26%] md:w-full">
              <div className="h-[436px] relative w-full">
                <Img
                  className="h-[436px] m-auto object-cover w-full"
                  src="images/img_rectangle58.png"
                  alt="rectangleFiftyEight"
                />
                <Img
                  className="absolute h-[436px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_rectangle58.png"
                  alt="rectangle6841"
                />
              </div>
              <Img
                className="h-[429px] md:h-auto object-cover w-full"
                src="images/img_rectangle62.png"
                alt="rectangleSixtyTwo"
              />
            </div>
            <div className="flex flex-col md:px-5 relative w-[23%] md:w-full">
              <Img
                className="h-[436px] mx-auto object-cover w-full"
                src="images/img_rectangle59.png"
                alt="rectangleFiftyNine"
              />
              <div className="md:h-[429px] h-[433px] mt-[-4px] mx-auto w-full z-[1]">
                <Img
                  className="h-[433px] m-auto object-cover w-full"
                  src="images/img_rectangle63.png"
                  alt="rectangleSixtyThree"
                />
                <Img
                  className="absolute h-[433px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_rectangle63.png"
                  alt="rectangle6842"
                />
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[597px] mt-[141px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
            size="txtPoppinsRegular26"
          >
            Quality Of WORK
          </Text>
          <Text
            className="md:ml-[0] ml-[474px] mt-2 sm:text-[32px] md:text-[38px] text-[42px] text-deep_orange-A200"
            size="txtInterBold42"
          >
            ____ Stats Are Numbers
          </Text>
          <div className="flex md:flex-col flex-row font-inter gap-4 items-start justify-start max-w-[1137px] md:ml-[0] ml-[150px] mt-[97px] md:px-5 w-full">
            <div className="flex md:flex-1 flex-col justify-start w-1/4 md:w-full">
              <Img
                className="h-[404px] md:h-auto object-cover w-full"
                src="images/img_rectangle64.png"
                alt="rectangleSixtyFour"
              />
              <Text
                className="md:ml-[0] ml-[57px] mt-[123px] md:text-5xl text-[73px] text-deep_orange-A200"
                size="txtInterBold73"
              >
                310
              </Text>
              <div className="h-[102px] ml-2 md:ml-[0] relative w-[87%]">
                <Text
                  className="mb-[-5.96px] mx-auto md:text-5xl text-[73px] text-deep_orange-A200 z-[1]"
                  size="txtInterBold73"
                >
                  ___
                </Text>
                <Text
                  className="mt-auto mx-auto text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtPoppinsRegular22"
                >
                  PROJECTS COMPLETED
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-poppins items-center justify-start w-3/4 md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[90%] md:w-full">
                <div className="flex flex-col justify-start md:mt-0 mt-[102px]">
                  <Text
                    className="md:ml-[0] ml-[27px] md:text-5xl text-[109px] text-deep_orange-A200"
                    size="txtPoppinsRegular109"
                  >
                    16
                  </Text>
                  <div className="h-[89px] relative w-full">
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-[22px] sm:text-lg text-white-A700 md:text-xl w-max"
                      size="txtPoppinsRegular22"
                    >
                      CRAZY THINKERS
                    </Text>
                    <Text
                      className="absolute h-full inset-y-[0] my-auto right-[18%] md:text-5xl text-[109px] text-deep_orange-A200"
                      size="txtInterRegular109"
                    >
                      __
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[404px] md:h-auto object-cover"
                  src="images/img_rectangle66.png"
                  alt="rectangleSixtySix"
                />
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[110px]">
                  <Text
                    className="md:text-5xl text-[109px] text-deep_orange-A200"
                    size="txtPoppinsRegular109"
                  >
                    7K
                  </Text>
                  <div className="font-inter md:h-[132px] h-[145px] relative w-full">
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto md:text-5xl text-[109px] text-white-A700 w-max"
                      size="txtInterRegular109WhiteA700"
                    >
                      <span className="md:text-xl sm:text-lg text-white-A700 font-poppins text-left text-[22px] font-normal">
                        HOURS OF WORK{" "}
                      </span>
                      <span className="text-white-A700 font-poppins text-left font-normal">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="absolute left-[19%] md:text-5xl text-[109px] text-deep_orange-A200 top-[0]"
                      size="txtInterRegular109"
                    >
                      __
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[404px] md:h-auto mb-[3px] object-cover"
                  src="images/img_rectangle69.png"
                  alt="rectangleSixtyNine"
                />
                <div className="h-[173px] relative w-1/4 md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-[51px] justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[62px] md:text-5xl text-[73px] text-deep_orange-A200"
                        size="txtInterBold73"
                      >
                        25
                      </Text>
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                        size="txtPoppinsRegular22"
                      >
                        YEARS OF EXPERTIES
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[9%] right-[22%] md:text-5xl text-[73px] text-deep_orange-A200"
                    size="txtInterBold73"
                  >
                    ___
                  </Text>
                </div>
                <Img
                  className="h-[404px] md:h-auto md:mt-0 mt-[3px] object-cover"
                  src="images/img_rectangle69.png"
                  alt="rectangle6713"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-900_d1 flex flex-col font-poppins items-center justify-end mt-[157px] p-[103px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-start justify-start max-w-[1002px] mt-[15px] mx-auto w-full">
              <Text
                className="md:ml-[0] ml-[336px] sm:text-[32px] md:text-[38px] text-[42px] text-deep_orange-A200"
                size="txtPoppinsBold42"
              >
                -INTENAX-
              </Text>
              <Text
                className="leading-[43.00px] mt-[35px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-full"
                size="txtPoppinsRegular25"
              >
                <>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&#39;t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be
                </>
              </Text>
              <Text
                className="md:ml-[0] ml-[334px] mt-[142px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtPoppinsRegular25"
              >
                THOMAS HENRY
              </Text>
              <div className="flex flex-row items-center justify-start md:ml-[0] ml-[408px] mt-[70px] w-[5%] md:w-full">
                <div className="bg-blue_gray-100 h-2 rounded-[50%] w-2"></div>
                <div className="bg-blue_gray-100 h-2 ml-[9px] rounded-[50%] w-2"></div>
                <div className="bg-blue_gray-100 h-2 ml-2 rounded-[50%] w-2"></div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[146px] mt-[134px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
            size="txtPoppinsRegular26"
          >
            PASSIONATE TEAM
          </Text>
          <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start md:ml-[0] ml-[77px] mt-[17px] md:px-5 w-[34%] md:w-full">
            <Text
              className="sm:mt-0 mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-deep_orange-A200"
              size="txtInterBold25"
            >
              _____
            </Text>
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-A200"
              size="txtPoppinsSemiBold36"
            >
              <>
                Creative Minds Always
                <br />
                Think Somthing .
              </>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-3.5 items-center justify-start max-w-[1138px] md:ml-[0] ml-[150px] mt-[115px] md:px-5 w-full">
            <div className="h-[434px] relative w-1/4 md:w-full">
              <Img
                className="h-[434px] m-auto object-cover w-full"
                src="images/img_rectangle72.png"
                alt="rectangleSeventyTwo"
              />
              <div className="absolute bg-red-900 bottom-[0] h-[126px] md:h-[66px] inset-x-[0] mx-auto p-[11px] w-full">
                <Text
                  className="absolute bottom-[9%] left-[12%] text-[22px] text-deep_orange-A200 sm:text-lg md:text-xl"
                  size="txtInterBold22"
                >
                  _________
                </Text>
                <Text
                  className="absolute left-[13%] text-[22px] sm:text-lg text-white-A700 md:text-xl top-[20%]"
                  size="txtPoppinsMedium22"
                >
                  <>
                    ROBERT VYNER
                    <br />
                    FOUNDER
                  </>
                </Text>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[13px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
              orientation="horizontal"
            >
              <div className="h-[434px] relative w-full">
                <Img
                  className="h-[434px] m-auto object-cover w-full"
                  src="images/img_rectangle73.png"
                  alt="rectangleSeventyThree"
                />
                <div className="absolute bg-red-900 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto w-full">
                  <Text
                    className="md:ml-[0] ml-[27px] mt-[25px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtPoppinsMedium22"
                  >
                    <>
                      SCOTT K. IRAVINE
                      <br />
                      ARCHITECT
                      <br />
                      _________
                    </>
                  </Text>
                </div>
              </div>
              <div className="h-[434px] relative w-full">
                <Img
                  className="h-[434px] m-auto object-cover w-full"
                  src="images/img_rectangle74.png"
                  alt="rectangleSeventyFour"
                />
                <div className="absolute bg-red-900 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[3px] w-full">
                  <Text
                    className="md:ml-[0] ml-[25px] mt-[21px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtPoppinsMedium22"
                  >
                    <>
                      WINNIE JONES
                      <br />
                      DESIGNER
                      <br />
                      ________
                    </>
                  </Text>
                </div>
              </div>
              <div className="h-[434px] relative w-full">
                <Img
                  className="h-[434px] m-auto object-cover w-full"
                  src="images/img_rectangle75.png"
                  alt="rectangleSeventyFive"
                />
                <div className="absolute bg-red-900 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[3px] w-full">
                  <Text
                    className="ml-6 md:ml-[0] mt-[21px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtPoppinsMedium22"
                  >
                    <>
                      LEWIS KUBICA
                      <br />
                      MANAGER
                      <br />
                      _________
                    </>
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-gray-800_02 flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-start mt-[143px] p-[107px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:ml-[0] ml-[42px] sm:mt-0 mt-[22px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtPoppinsMedium30WhiteA700"
            >
              LOGO 1
            </Text>
            <Text
              className="sm:ml-[0] ml-[274px] sm:mt-0 mt-[22px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtPoppinsMedium30WhiteA700"
            >
              LOGO 2
            </Text>
            <Text
              className="sm:ml-[0] ml-[237px] sm:mt-0 mt-[22px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtPoppinsMedium30WhiteA700"
            >
              LOGO 3
            </Text>
            <Text
              className="sm:ml-[0] ml-[189px] sm:mt-0 mt-[22px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtPoppinsMedium30WhiteA700"
            >
              LOGO 4
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[601px] mt-[127px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
            size="txtPoppinsRegular26"
          >
            WHAT’S HAPPING
          </Text>
          <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-start md:ml-[0] ml-[473px] mt-[9px] md:px-5 w-[30%] md:w-full">
            <Text
              className="sm:mt-0 mt-2 text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-A200"
              size="txtInterBold36"
            >
              _____
            </Text>
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-A200"
              size="txtPoppinsBold36"
            >
              NEWS & UPDATES .
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1133px] md:ml-[0] ml-[151px] mt-8 md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[42%] md:w-full">
              <div className="flex flex-col font-inter relative w-full">
                <Img
                  className="h-[493px] mx-auto object-cover w-full"
                  src="images/img_image28.png"
                  alt="imageTwentyEight"
                />
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[246px] ml-[34px] mt-[-34px] sm:text-[21px] md:text-[23px] text-[25px] text-center z-[1]"
                  shape="square"
                  color="deep_orange_A200"
                  size="lg"
                  variant="fill"
                >
                  january 31,2019
                </Button>
              </div>
              <Text
                className="md:ml-[0] ml-[3px] mt-[52px] text-[22px] text-deep_orange-A200 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                Design Of Bulding; Planning To Perfoming
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[13px] text-[17px] text-blue_gray-900"
                size="txtPoppinsRegular17"
              >
                By Andhrev Smith Architecture Design
              </Text>
              <Text
                className="mt-1.5 text-[22px] text-deep_orange-A200 sm:text-lg md:text-xl"
                size="txtInterBold22"
              >
                _______
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-11 items-center justify-start ml-3.5 md:ml-[0] w-[26%] md:w-full">
              <Img
                className="h-[290px] md:h-auto object-cover w-[99%]"
                src="images/img_image29.png"
                alt="imageTwentyNine"
              />
              <Img
                className="h-[281px] md:h-auto object-cover w-[99%]"
                src="images/img_image30.png"
                alt="imageThirty"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start ml-7 md:ml-[0] w-[30%] md:w-full">
              <Button
                className="cursor-pointer font-bold font-inter leading-[normal] min-w-[246px] md:ml-[0] ml-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                shape="square"
                color="deep_orange_A200"
                size="lg"
                variant="fill"
              >
                january 31,2019
              </Button>
              <Text
                className="mt-[22px] md:text-2xl sm:text-[22px] text-[26px] text-deep_orange-A200"
                size="txtPoppinsSemiBold26"
              >
                <>
                  Our Practies Offers You
                  <br />
                  Exclusive Designs
                </>
              </Text>
              <div className="flex flex-row font-poppins gap-[15px] items-start justify-start mt-[13px] w-full">
                <Text
                  className="text-[17px] text-blue_gray-900"
                  size="txtPoppinsRegular17"
                >
                  By Andhrev Smith
                </Text>
                <Text
                  className="text-[17px] text-blue_gray-900"
                  size="txtPoppinsRegular17"
                >
                  Architecture Design
                </Text>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] text-[17px] text-deep_orange-A200"
                size="txtInterBold17"
              >
                _______
              </Text>
              <Button
                className="cursor-pointer font-bold font-inter leading-[normal] min-w-[246px] mt-[104px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                shape="square"
                color="deep_orange_A200"
                size="lg"
                variant="fill"
              >
                january 31,2019
              </Button>
              <Text
                className="md:ml-[0] ml-[3px] mt-[37px] md:text-2xl sm:text-[22px] text-[26px] text-deep_orange-A200"
                size="txtPoppinsSemiBold26"
              >
                <>
                  Tips For Self-Made Home
                  <br />
                  Interior Layouts
                </>
              </Text>
              <div className="flex flex-row font-poppins gap-[9px] items-center justify-start ml-1.5 md:ml-[0] mt-[13px] w-[98%] md:w-full">
                <Text
                  className="text-[17px] text-blue_gray-900"
                  size="txtPoppinsRegular17"
                >
                  By Andhrev Smith{" "}
                </Text>
                <Text
                  className="text-[17px] text-blue_gray-900"
                  size="txtPoppinsRegular17"
                >
                  Architecture Design
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[5px] mt-0.5 text-[17px] text-deep_orange-A200"
                size="txtInterBold17"
              >
                _______
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[151px] mt-[194px] md:px-5 w-[67%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtPoppinsBold36Black900"
            >
              INTENAX{" "}
            </Text>
            <Text
              className="ml-1.5 md:ml-[0] text-[22px] text-deep_orange-A200 sm:text-lg md:text-xl"
              size="txtInterBold22"
            >
              ______
            </Text>
            <Text
              className="md:ml-[0] ml-[313px] text-[22px] text-black-900 sm:text-lg md:text-xl"
              size="txtPoppinsBold22"
            >
              Subscribe To Our Weekley Newsleter
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-inter gap-[21px] items-center justify-end md:ml-[0] ml-[691px] md:px-5 w-[42%] md:w-full">
            <Input
              name="rectangleEightyFour"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="flex h-[62px] w-[68%] sm:w-full"
              shape="square"
              color="black_900"
              variant="outline"
            ></Input>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[170px] text-center text-xl"
              shape="square"
              color="orange_300"
              size="lg"
              variant="fill"
            >
              Subscribe
            </Button>
          </div>
          <Footer className="bg-blue_gray-100 flex font-poppins items-center justify-center mt-[238px] md:px-5 w-full" />
        </div>
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="flex flex-col gap-[26px] items-start justify-start max-w-[1145px] md:px-5 w-full">
            <header className="bg-yellow-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[5px] w-full">
              <Img
                className="h-[19px] ml-12 md:ml-[0] md:mt-0 my-5"
                src="images/img_lock.svg"
                alt="lock"
              />
              <Text
                className="md:ml-[0] ml-[9px] md:mt-0 my-5 text-base text-white-A700"
                size="txtInterRegular16"
              >
                venkatesh@gmail.com
              </Text>
              <Img
                className="h-[19px] md:ml-[0] ml-[23px] md:mt-0 my-5 w-[19px]"
                src="images/img_call.svg"
                alt="call"
              />
              <Text
                className="ml-2 md:ml-[0] md:mt-0 my-5 text-base text-white-A700"
                size="txtInterRegular16"
              >
                +91 73309 72400
              </Text>
              <Text
                className="md:ml-[0] ml-[513px] md:mt-0 my-5 text-base text-white-A700"
                size="txtInterRegular16"
              >
                Vendor
              </Text>
              <Img
                className="h-[7px] mb-[25px] md:ml-[0] ml-[7px] md:mt-0 mt-[29px]"
                src="images/img_arrowdown_white_a700.svg"
                alt="arrowdown"
              />
              <a className="md:ml-[0] ml-[22px] md:mt-0 my-5 text-base text-white-A700">
                <Text
                  className="common-pointer"
                  size="txtInterRegular16"
                  onClick={() => navigate("/frame1131")}
                >
                  Login
                </Text>
              </a>
              <Img
                className="h-[7px] mb-[25px] ml-3 md:ml-[0] mr-[26px] md:mt-0 mt-[29px]"
                src="images/img_arrowdown_white_a700.svg"
                alt="arrowdown_One"
              />
            </header>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[82%] md:w-full">
              <Text
                className="sm:text-[41px] md:text-[47px] text-[55px] text-light_blue-900"
                size="txtInterMedium55"
              >
                LOGO
              </Text>
              <Text
                className="md:ml-[0] ml-[87px] text-[19px] text-orange-700"
                size="txtInterMedium19Orange700"
              >
                BUY
              </Text>
              <Img
                className="h-[7px] ml-1.5 md:ml-[0]"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Text
                className="md:ml-[0] ml-[68px] text-[17px] text-black-900"
                size="txtInterRegular17"
              >
                RENT
              </Text>
              <Img
                className="h-[7px] md:ml-[0] ml-[7px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown_Two"
              />
              <Text
                className="md:ml-[0] ml-[57px] text-[17px] text-black-900"
                size="txtInterRegular17"
              >
                PROJECTS
              </Text>
              <Img
                className="h-[7px] md:ml-[0] ml-[9px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown_Three"
              />
              <Text
                className="md:ml-[0] ml-[71px] text-[17px] text-black-900"
                size="txtInterRegular17"
              >
                AGENTS{" "}
              </Text>
              <Img
                className="h-[7px] md:ml-[0] ml-[15px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown_Four"
              />
              <Text
                className="md:ml-[0] ml-[59px] text-[17px] text-black-900"
                size="txtInterRegular17"
              >
                SERVICES
              </Text>
              <Img
                className="h-[7px] ml-3.5 md:ml-[0]"
                src="images/img_arrowdown.svg"
                alt="arrowdown_Five"
              />
            </div>
          </div>
          <div className="md:h-[1380px] h-[723px] sm:h-[744px] mt-[21px] md:px-5 relative w-full">
            <Img
              className="h-[723px] m-auto object-cover w-full"
              src="images/img_rectangle44.png"
              alt="rectangleFortyFour"
            />
            <div className="absolute bg-black-900_7e flex flex-col h-max inset-[0] items-center justify-center m-auto p-[68px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-6 items-center justify-start mb-[129px] mt-[210px] w-full">
                <Text
                  className="sm:text-[39px] md:text-[45px] text-[49px] text-white-A700"
                  size="txtInterRegular49"
                >
                  Explore Buy / sell /Rent Property in India{" "}
                </Text>
                <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="white_A700"
                    size="md"
                    variant="outline"
                  >
                    <Img
                      src="images/img_arrowleft_yellow_900.svg"
                      alt="arrowleft"
                    />
                  </Button>
                  <div className="bg-gray-400_99 flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[123px] md:mt-0 mt-[7px] p-[21px] sm:px-5 rounded-[10px] w-[72%] md:w-full">
                    <div className="flex flex-col gap-[34px] items-center justify-start mt-2.5 w-[92%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          BUY
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[127px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          RENT/PG
                        </Text>
                        <Text
                          className="ml-24 md:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          PROJECTS{" "}
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[90px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          COMMERCIAL
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[82px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          DEALERS
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end pl-[13px] rounded-[21px] w-full">
                        <Text
                          className="text-[10px] text-black-900"
                          size="txtPoppinsLight10"
                        >
                          Flats/Apartments
                        </Text>
                        <Line className="bg-blue_gray-100 h-[42px] md:h-px md:ml-[0] ml-[7px] md:w-full w-px" />
                        <Img
                          className="h-[13px] md:ml-[0] ml-[15px]"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                        <Text
                          className="md:ml-[0] ml-[5px] text-[10px] text-black-900"
                          size="txtPoppinsLight10"
                        >
                          Search City
                        </Text>
                        <Line className="bg-blue_gray-100 h-[42px] md:h-px md:ml-[0] ml-[251px] md:w-full w-px" />
                        <Text
                          className="md:ml-[0] ml-[7px] text-[10px] text-black-900"
                          size="txtPoppinsLight10"
                        >
                          Budget
                        </Text>
                        <Img
                          className="h-1.5 ml-44 md:ml-[0]"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_Six"
                        />
                        <Input
                          name="group683"
                          placeholder="Search"
                          value={group683value}
                          onChange={(e) => setGroup683value(e)}
                          className="!placeholder:text-white-A700 !text-white-A700 font-medium p-0 text-center text-xs w-full"
                          wrapClassName="flex md:flex-1 md:ml-[0] ml-[19px] w-[15%] md:w-full"
                          prefix={
                            <div className="h-[13px] mt-[3px] mb-px mr-[11px] w-[13px] bg-white-A700">
                              <Img
                                className="cursor-pointer h-[13px] my-auto"
                                src="images/img_search.svg"
                                alt="search"
                              />
                            </div>
                          }
                          suffix={
                            <CloseSVG
                              fillColor="#ffffff"
                              className="cursor-pointer h-[13px] my-auto"
                              onClick={() => setGroup683value("")}
                              style={{
                                visibility:
                                  group683value?.length <= 0
                                    ? "hidden"
                                    : "visible",
                              }}
                              height={13}
                              width={13}
                              viewBox="0 0 13 13"
                            />
                          }
                          shape="round"
                          color="light_blue_900"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="flex h-[72px] items-center justify-center md:ml-[0] ml-[102px] md:mt-0 mt-[38px] w-[72px]"
                    shape="circle"
                    color="white_A700"
                    size="md"
                    variant="outline"
                  >
                    <Img
                      src="images/img_arrowright_yellow_900.svg"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[17px] items-center justify-start max-w-[1147px] mt-[83px] md:px-5 w-full">
            <div className="bg-light_green-200 flex md:flex-1 flex-col items-center justify-end pt-1.5 px-1.5 w-[24%] md:w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start mt-3 w-[96%] md:w-full">
                <Text
                  className="text-[19px] text-center text-white-A700"
                  size="txtInterMedium19WhiteA700"
                >
                  <>
                    Post your Property Ads
                    <br />
                    for Free
                  </>
                </Text>
                <div className="flex flex-row font-poppins gap-[35px] items-center justify-between w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center mb-[17px] min-w-[154px] mt-2.5"
                    rightIcon={
                      <div className="mt-0.5 mb-[3px] ml-[11px] outline-black-900 outline-[0.5px] outline">
                        <Img
                          src="images/img_arrowleft_black_900.svg"
                          alt="arrow_left"
                        />
                      </div>
                    }
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="leading-[normal] text-left text-xs">
                      List Your Property
                    </div>
                  </Button>
                  <Img
                    className="h-[61px] md:h-auto object-cover w-[61px]"
                    src="images/img_maskgroup.png"
                    alt="maskgroup"
                  />
                </div>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
              orientation="horizontal"
            >
              <div className="bg-pink-300 flex flex-col items-end justify-end p-1.5 w-full">
                <div className="flex flex-col gap-5 items-start justify-start mt-[13px] w-[95%] md:w-full">
                  <Text
                    className="text-[19px] text-white-A700"
                    size="txtInterMedium19WhiteA700"
                  >
                    <>
                      Top real estate agents &<br />
                      property dealers in india
                    </>
                  </Text>
                  <div className="flex flex-row font-poppins gap-8 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center mb-[11px] min-w-[154px] mt-4"
                      rightIcon={
                        <div className="mt-0.5 mb-[3px] ml-[11px] outline-black-900 outline-[0.5px] outline">
                          <Img
                            src="images/img_arrowleft_black_900.svg"
                            alt="arrow_left"
                          />
                        </div>
                      }
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      <div className="leading-[normal] text-left text-xs">
                        List Your Property
                      </div>
                    </Button>
                    <Img
                      className="h-[61px] md:h-auto object-cover w-[61px]"
                      src="images/img_maskgroup_61x61.png"
                      alt="maskgroup"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-pink-300_01 flex flex-col items-end justify-end pl-[7px] py-[7px] w-full">
                <div className="flex flex-col gap-[21px] items-start justify-start mt-3 w-[94%] md:w-full">
                  <Text
                    className="text-[19px] text-white-A700"
                    size="txtInterMedium19WhiteA700"
                  >
                    <>
                      Explore India’s Top
                      <br />
                      Residential Cities List
                    </>
                  </Text>
                  <div className="flex flex-row font-poppins gap-[35px] items-center justify-between w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center mb-[11px] min-w-[154px] mt-[15px]"
                      rightIcon={
                        <div className="mt-0.5 mb-[3px] ml-[11px] outline-black-900 outline-[0.5px] outline">
                          <Img
                            src="images/img_arrowleft_black_900.svg"
                            alt="arrow_left"
                          />
                        </div>
                      }
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      <div className="leading-[normal] text-left text-xs">
                        List Your Property
                      </div>
                    </Button>
                    <Img
                      className="h-[60px] md:h-auto object-cover w-[60px]"
                      src="images/img_maskgroup_60x60.png"
                      alt="maskgroup"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-light_blue-900 flex flex-col items-end justify-end p-[7px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start mt-3 w-[92%] md:w-full">
                  <Text
                    className="text-[19px] text-white-A700"
                    size="txtInterMedium19WhiteA700"
                  >
                    <>
                      Helping You to find your
                      <br />
                      dream Property
                    </>
                  </Text>
                  <div className="flex flex-row font-poppins gap-[23px] items-center justify-between w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center mb-[11px] min-w-[154px] mt-4"
                      rightIcon={
                        <div className="mt-0.5 mb-[3px] ml-[11px] outline-black-900 outline-[0.5px] outline">
                          <Img
                            src="images/img_arrowleft_black_900.svg"
                            alt="arrow_left"
                          />
                        </div>
                      }
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      <div className="leading-[normal] text-left text-xs">
                        List Your Property
                      </div>
                    </Button>
                    <Img
                      className="h-[61px] md:h-auto object-cover w-[61px]"
                      src="images/img_maskgroup_1.png"
                      alt="maskgroup"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="font-poppins md:h-[156px] h-[68px] mt-[88px] md:px-5 relative w-[52%] md:w-full">
            <div className="absolute bg-light_blue-900 h-[67px] inset-[0] justify-center m-auto w-full"></div>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 w-max"
              size="txtPoppinsMedium45"
            >
              Explore our Real Estate Services
            </Text>
          </div>
          <div className="flex flex-col font-poppins md:gap-10 gap-[180px] items-center justify-start max-w-[1147px] mt-[50px] md:px-5 w-full">
            <div className="md:gap-5 gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[7px] w-full">
                <div className="bg-gray-100 flex flex-col h-[88px] items-center justify-start md:ml-[0] ml-[78px] mt-[13px] p-6 sm:px-5 rounded-[50%] w-[88px]">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_maskgroup_40x40.png"
                    alt="maskgroup"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[42px] mt-[17px] text-black-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Agents / Brokers
                </Text>
                <Text
                  className="mt-0.5 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsLight14"
                >
                  is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  className="mb-3 md:ml-[0] ml-[82px] mt-[19px] outline outline-[1px] outline-light_blue-900 px-1.5 rounded-sm text-[13px] text-light_blue-900"
                  size="txtPoppinsRegular13"
                >
                  Read More
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[5px] w-full">
                <div className="bg-gray-100 flex flex-col h-[88px] items-center justify-start md:ml-[0] ml-[82px] mt-3.5 p-6 sm:px-5 rounded-[50%] w-[88px]">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_maskgroup_40x40.png"
                    alt="maskgroup"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[46px] mt-[17px] text-black-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Agents / Brokers
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-0.5 text-black-900 text-center text-sm w-[99%] sm:w-full"
                  size="txtPoppinsLight14"
                >
                  is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  className="mb-[15px] md:ml-[0] ml-[86px] mt-[19px] outline outline-[1px] outline-light_blue-900 px-1.5 rounded-sm text-[13px] text-light_blue-900"
                  size="txtPoppinsRegular13"
                >
                  Read More
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[3px] w-full">
                <div className="bg-gray-100 flex flex-col h-[88px] items-center justify-start md:ml-[0] ml-[78px] mt-3 p-6 sm:px-5 rounded-[50%] w-[88px]">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_maskgroup_40x40.png"
                    alt="maskgroup"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[42px] mt-[17px] text-black-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Agents / Brokers
                </Text>
                <Text
                  className="mt-0.5 text-black-900 text-center text-sm w-[98%] sm:w-full"
                  size="txtPoppinsLight14"
                >
                  is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  className="md:ml-[0] ml-[82px] my-5 outline outline-[1px] outline-light_blue-900 px-1.5 rounded-sm text-[13px] text-light_blue-900"
                  size="txtPoppinsRegular13"
                >
                  Read More
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[5px] w-full">
                <div className="bg-gray-100 flex flex-col h-[88px] items-start justify-start md:ml-[0] ml-[82px] mt-2.5 p-[22px] sm:px-5 rounded-[50%] w-[88px]">
                  <Img
                    className="h-10 md:h-auto my-0.5 object-cover w-10"
                    src="images/img_maskgroup_40x40.png"
                    alt="maskgroup"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[46px] mt-[17px] text-black-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Agents / Brokers
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-0.5 text-black-900 text-center text-sm w-[99%] sm:w-full"
                  size="txtPoppinsLight14"
                >
                  is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  className="md:ml-[0] ml-[86px] my-[19px] outline outline-[1px] outline-light_blue-900 px-1.5 rounded-sm text-[13px] text-light_blue-900"
                  size="txtPoppinsRegular13"
                >
                  Read More
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[7px] w-full">
                <div className="bg-gray-100 flex flex-col h-[88px] items-center justify-start md:ml-[0] ml-[78px] mt-[3px] p-6 sm:px-5 rounded-[50%] w-[88px]">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_maskgroup_40x40.png"
                    alt="maskgroup"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[42px] mt-[17px] text-black-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Agents / Brokers
                </Text>
                <Text
                  className="mt-0.5 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsLight14"
                >
                  is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  className="mb-[22px] md:ml-[0] ml-[82px] mt-[19px] outline outline-[1px] outline-light_blue-900 px-1.5 rounded-sm text-[13px] text-light_blue-900"
                  size="txtPoppinsRegular13"
                >
                  Read More
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[7px] w-full">
                <div className="bg-gray-100 flex flex-col h-[88px] items-center justify-start md:ml-[0] ml-[78px] mt-[3px] p-6 sm:px-5 rounded-[50%] w-[88px]">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_maskgroup_40x40.png"
                    alt="maskgroup"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[42px] mt-[17px] text-black-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Agents / Brokers
                </Text>
                <Text
                  className="mt-0.5 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsLight14"
                >
                  is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  className="mb-[22px] md:ml-[0] ml-[82px] mt-[19px] outline outline-[1px] outline-light_blue-900 px-1.5 rounded-sm text-[13px] text-light_blue-900"
                  size="txtPoppinsRegular13"
                >
                  Read More
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[7px] w-full">
                <div className="bg-gray-100 flex flex-col h-[88px] items-center justify-start md:ml-[0] ml-[78px] mt-[3px] p-6 sm:px-5 rounded-[50%] w-[88px]">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_maskgroup_40x40.png"
                    alt="maskgroup"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[42px] mt-[17px] text-black-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Agents / Brokers
                </Text>
                <Text
                  className="mt-0.5 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsLight14"
                >
                  is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  className="mb-[22px] md:ml-[0] ml-[82px] mt-[19px] outline outline-[1px] outline-light_blue-900 px-1.5 rounded-sm text-[13px] text-light_blue-900"
                  size="txtPoppinsRegular13"
                >
                  Read More
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[7px] w-full">
                <div className="bg-gray-100 flex flex-col h-[88px] items-center justify-start md:ml-[0] ml-[78px] mt-[3px] p-6 sm:px-5 rounded-[50%] w-[88px]">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_maskgroup_40x40.png"
                    alt="maskgroup"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[42px] mt-[17px] text-black-900 text-xl"
                  size="txtPoppinsRegular20"
                >
                  Agents / Brokers
                </Text>
                <Text
                  className="mt-0.5 text-black-900 text-center text-sm w-full"
                  size="txtPoppinsLight14"
                >
                  is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  className="mb-[22px] md:ml-[0] ml-[82px] mt-[19px] outline outline-[1px] outline-light_blue-900 px-1.5 rounded-sm text-[13px] text-light_blue-900"
                  size="txtPoppinsRegular13"
                >
                  Read More
                </Text>
              </div>
            </div>
            <Text
              className="sm:text-[35px] md:text-[41px] text-[45px] text-orange-700"
              size="txtPoppinsMedium45Orange700"
            >
              Our Properties
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThirteenPage;

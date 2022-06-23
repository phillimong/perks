import React from "react";
import styled from "styled-components";
export const DashBoardOptInView1 = ({}) => {
  const ButtonsFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <DashBoardOptInViewRoot>
      <FlexRow>
        <FlexColumn>
          <Element23>
            <WhiteRectangle />
            <Image1 src={"https://file.rendit.io/n/TmHxrXVAjIvKuYK2AN3S.png"} />
          </Element23>
          <Text1>Dashboard</Text1>
        </FlexColumn>
        <Element24>
          <JaneDoe>Jane{"  "}Doe</JaneDoe>
          <Text2>Nairobi Branch</Text2>
          <Image2 src={"https://file.rendit.io/n/BCxqb9zekHmrBu6OS6VX.png"} />
        </Element24>
        <Image3 src={"https://file.rendit.io/n/TnTVdeuniR79Nzq9kLfw.svg"} />
      </FlexRow>
      <Text3>Insights</Text3>
      <FlexRow1>
        <WhiteFlexColumn>
          <FlexRow2 margin={"0px 0px 13.93px 0px"}>
            <Image4 src={"https://file.rendit.io/n/ttrApT0IyrlP7sHS1csn.svg"} />
            <Image5 src={"https://file.rendit.io/n/gR7qETGwMhUWWgUKM9vW.svg"} />
          </FlexRow2>
          <Text4 margin={"0px 0px 7.53px 2px"}>Total customers</Text4>
          <FlexRow3>
            <Text5>2,420</Text5>
            <ScreaminGreenFlexRow padding={"1.34px 4.1px 0.06px 5.89px"}>
              <Line src={"https://file.rendit.io/n/MBFmDMN1QuCj3ZmWIspg.svg"} />
              <Element21>20% </Element21>
            </ScreaminGreenFlexRow>
          </FlexRow3>
        </WhiteFlexColumn>
        <WhiteFlexColumn1>
          <FlexRow2 margin={"0px 0px 13.92px 0px"}>
            <Image4 src={"https://file.rendit.io/n/STGEYhSlxnDd5NqX253p.svg"} />
            <Image5 src={"https://file.rendit.io/n/Dg3WIYnvNrkei5qAb3yf.svg"} />
          </FlexRow2>
          <Text4 margin={"0px 0px 9.94px 1px"}>Total{"  "}Premiums</Text4>
          <FlexRow5>
            <Text6>Kes. 245,200</Text6>
            <ScreaminGreenFlexRow padding={"1.33px 4.1px 0.07px 5.89px"}>
              <Line1
                src={"https://file.rendit.io/n/XUKQ6mgb5EjsKZoALlev.svg"}
              />
              <Element21>30% </Element21>
            </ScreaminGreenFlexRow>
          </FlexRow5>
        </WhiteFlexColumn1>
        <Buttons onClick={(e) => ButtonsFunction(e, "Buttons")}>
          <BaseButton>
            <Label>Download XLS</Label>
          </BaseButton>
        </Buttons>
      </FlexRow1>
      <FlexRow6>
        <Text7>Filters</Text7>
        <WhiteFlexColumn2 />
        <WhiteFlexRow margin={"0px 25px 0px 0px"}>
          <WhiteRectangle1 width={"113px"}>
            <Text8>Service Voucher</Text8>
            <Arrowrightblackdp4
              src={"https://file.rendit.io/n/bIlzEJZlmalFdF4GhKp9.svg"}
            />
          </WhiteRectangle1>
        </WhiteFlexRow>
        <WhiteFlexRow margin={"0px 34.6px 0px 0px"}>
          <WhiteRectangle1 width={"95.4px"}>
            <Text9>Origin</Text9>
            <Arrowrightblackdp3
              src={"https://file.rendit.io/n/5UNvs9XXVddK6UXMlBsW.svg"}
              left={"54.77px"}
            />
          </WhiteRectangle1>
        </WhiteFlexRow>
        <WhiteFlexRow margin={"0px 629.2px 0px 0px"}>
          <WhiteRectangle1 width={"93.8px"}>
            <Text10>Dates</Text10>
            <Arrowrightblackdp3
              src={"https://file.rendit.io/n/4NSAr3in2qrDSXlepSOc.svg"}
              left={"49.77px"}
            />
          </WhiteRectangle1>
        </WhiteFlexRow>
        <Element25>
          <FernFlexRow>
            <Text11>Opt-In</Text11>
          </FernFlexRow>
          <Arrowrightblackdp
            src={"https://file.rendit.io/n/NhnOHblD5MNUXGvE3bSt.svg"}
          />
        </Element25>
        <Text12>View</Text12>
      </FlexRow6>
      <FlexRow7>
        <Element26 margin={"0px 19.38px 0px 0px"} />
        <SVNumber margin={"0px 61px 0px 0px"}>
          SV Number{"                                          "}
        </SVNumber>
        <SVNumber margin={"0px 61px 0px 0px"}>Full Name</SVNumber>
        <SVNumber margin={"0px 61px 0px 0px"}>Date{"  "}Of Birth</SVNumber>
        <SVNumber margin={"0px 41px 0px 0px"}> ID /Passport No</SVNumber>
        <SVNumber margin={"0px 54px 0px 0px"}>Gender</SVNumber>
        <SVNumber margin={"0px 61px 0px 0px"}>Phone No</SVNumber>
        <SVNumber margin={"0px 61px 0px 0px"}>Origin</SVNumber>
        <SVNumber margin={"0px 60px 0px 0px"}>Destination</SVNumber>
        <SVNumber margin={"0px 61px 0px 0px"}>Other Destination</SVNumber>
        <SVNumber margin={"0px 61px 0px 0px"}>Departure Date</SVNumber>
        <SVNumber margin={"0px 61px 0px 0px"}>Return Date</SVNumber>
        <SVNumber margin={"0px 61px 0px 0px"}>Branch</SVNumber>
        <SVNumber margin={"0"}>Premium</SVNumber>
      </FlexRow7>
      <SilverFlexRow>
        <Element26 margin={"0"} />
      </SilverFlexRow>
      <SilverFlexRow1>
        <Element26 margin={"0"} />
      </SilverFlexRow1>
      <SilverFlexRow2>
        <Element26 margin={"0"} />
      </SilverFlexRow2>
      <SilverFlexRow3>
        <Element26 margin={"0"} />
      </SilverFlexRow3>
      <Element31>
        <SilverFlexRow4>
          <Element26 margin={"0"} />
        </SilverFlexRow4>
        <FlexColumn1 left={"781px"}>
          {[
            {
              childText: "Masai Mara",
              textAlign: "left",
            },
            {
              childText: "Nakuru",
              textAlign: "left",
            },
            {
              childText: "Nairobi",
              textAlign: "left",
            },
            {
              childText: "Masai Mara",
              textAlign: "left",
            },
            {
              childText: "Masai Mara",
              textAlign: "left",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn1>
        <FlexColumn2 left={"906px"}>
          {[
            {
              childText: "Mombasa",
              textAlign: "center",
            },
            {
              childText: "Kisumu",
              textAlign: "center",
            },
            {
              childText: "Masai Mara",
              textAlign: "center",
            },
            {
              childText: "Mombasa",
              textAlign: "center",
            },
            {
              childText: "Mombasa",
              textAlign: "center",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn2>
        <FlexColumn3 left={"1029px"}>
          <Text33>-</Text33>
          <Text33>-</Text33>
          <Text33>-</Text33>
          <Text33>-</Text33>
          <Text23 textAlign={"center"}>Tsavo West</Text23>
        </FlexColumn3>
        <FlexColumn4>
          {[
            {
              childText: "Lavington",
              textAlign: "left",
            },
            {
              childText: "CBD",
              textAlign: "left",
            },
            {
              childText: "Kiambu",
              textAlign: "left",
            },
            {
              childText: "Lavington",
              textAlign: "left",
            },
            {
              childText: "Kiambu",
              textAlign: "left",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn4>
        <FlexColumn2 left={"1589px"}>
          {[
            {
              childText: "Kes. 600",
            },
            {
              childText: "Kes. 1,800",
            },
            {
              childText: "Kes. 2,400",
            },
            {
              childText: "Kes. 2,400",
            },
            {
              childText: "Kes. 1,800",
            },
          ].map((data) => (
            <Text43>{data.childText}</Text43>
          ))}
        </FlexColumn2>
        <FlexColumn6>
          {[
            {
              childText: "28-03-2022",
              textAlign: "left",
            },
            {
              childText: "28-04-2022",
              textAlign: "left",
            },
            {
              childText: "28-05-2022",
              textAlign: "left",
            },
            {
              childText: "15-07-2022",
              textAlign: "left",
            },
            {
              childText: "28-03-2022",
              textAlign: "left",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn6>
        <FlexColumn7>
          <Text33>-</Text33>
          <Text23 textAlign={"left"}>30-04-2022</Text23>
          <Text23 textAlign={"left"}>31-05-2022</Text23>
          <Text23 textAlign={"left"}>18-07-2022</Text23>
          <Text23 textAlign={"left"}>30-03-2022</Text23>
        </FlexColumn7>
        <FlexColumn2 left={"45px"}>
          {[
            {
              childText: "SV-12345",
              textAlign: "left",
            },
            {
              childText: "SV-12346",
              textAlign: "left",
            },
            {
              childText: "SV-12347",
              textAlign: "left",
            },
            {
              childText: "SV- 12348",
              textAlign: "left",
            },
            {
              childText: "SV-12349",
              textAlign: "left",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn2>
        <FlexColumn1 left={"159px"}>
          {[
            {
              childText: "James N Doe",
              textAlign: "left",
            },
            {
              childText: "John . N . Doe",
              textAlign: "left",
            },
            {
              childText: "Jane . R .  Doe",
              textAlign: "left",
            },
            {
              childText: "Keith . T .  Doe",
              textAlign: "left",
            },
            {
              childText: "Keith . T .  Doe",
              textAlign: "left",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn1>
        <FlexColumn10>
          {[
            {
              childText: "03-09-1987",
              textAlign: "left",
            },
            {
              childText: "03-09-1987",
              textAlign: "left",
            },
            {
              childText: "03-09-1987",
              textAlign: "left",
            },
            {
              childText: "03-09-1987",
              textAlign: "left",
            },
            {
              childText: "03-09-1987",
              textAlign: "left",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn10>
        <FlexColumn11>
          <Text70>2726 xxx xxx</Text70>
          <Text70>2726 xxx xxx</Text70>
          <Text70>2726 xxx xxx</Text70>
          <Text70>2726 xxx xxx</Text70>
          <Text23 textAlign={"left"}>2726 xxx xxx</Text23>
        </FlexColumn11>
        <FlexColumn3 left={"654px"}>
          {[
            {
              childText: "0726 xxx xxx",
              textAlign: "left",
            },
            {
              childText: "0726 xxx xxx",
              textAlign: "left",
            },
            {
              childText: "0726 xxx xxx",
              textAlign: "left",
            },
            {
              childText: "0726 xxx xxx",
              textAlign: "left",
            },
            {
              childText: "0726 xxx xxx",
              textAlign: "left",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn3>
        <FlexColumn2 left={"582px"}>
          {[
            {
              childText: "Male",
              textAlign: "left",
            },
            {
              childText: "Male",
              textAlign: "left",
            },
            {
              childText: "Female",
              textAlign: "left",
            },
            {
              childText: "Male",
              textAlign: "left",
            },
            {
              childText: "Male",
              textAlign: "left",
            },
          ].map((data) => (
            <Text23 textAlign={data.textAlign}>{data.childText}</Text23>
          ))}
        </FlexColumn2>
      </Element31>
      <LoadMore>Load More </LoadMore>
    </DashBoardOptInViewRoot>
  );
};
const DashBoardOptInViewRoot = styled.div`
  border-width: 0.18px;
  border-color: rgba(0, 0, 0, 0.9);
  border-style: solid;
  height: 880.4px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-width: 1718px;
  align-items: flex-end;
  padding: 0.8px 46px 0.8px 0px;
`;
const FlexRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0px 0px 7.88px 0px;
`;
const FlexColumn = styled.div`
  width: 975px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  align-items: flex-start;
  margin: 0px 485.32px 0px 0px;
`;
const Element23 = styled.div`
  align-self: stretch;
  height: 114.2px;
  position: relative;
  min-width: 975px;
`;
const WhiteRectangle = styled.div`
  width: 975px;
  height: 79.3px;
  background-color: #ffffff;
  position: absolute;
`;
const Image1 = styled.img`
  width: 240px;
  height: 88px;
  position: absolute;
  top: 26.2px;
  left: 62px;
`;
const Text1 = styled.div`
  font-size: 28.05px;
  font-family: DM Sans;
  font-weight: 500;
  letter-spacing: 2.24px;
  margin: 0px 0px 0px 55px;
`;
const Element24 = styled.div`
  width: 199.68px;
  height: 261.41px;
  position: relative;
  flex-grow: 1;
  margin: 0px 16px 0px 0px;
`;
const JaneDoe = styled.div`
  text-align: center;
  font-size: 18.82px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 26.34px;
  position: absolute;
  top: 114.63px;
  left: 111.68px;
  white-space: pre-wrap;
`;
const Text2 = styled.div`
  font-size: 12.21px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 14.01px;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 142.66px;
  left: 114.68px;
`;
const Image2 = styled.img`
  width: 132.58px;
  height: 132.24px;
  position: absolute;
  top: 93.06px;
`;
const Image3 = styled.img`
  width: 2.57px;
  height: 15.84px;
  align-self: center;
`;
const Text3 = styled.div`
  font-size: 20.81px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 1.04px;
  line-height: 17.97px;
  color: rgba(0, 120, 191, 0.59);
  align-self: flex-start;
  margin: 0px 0px 15.66px 59px;
`;
const FlexRow1 = styled.div`
  align-self: stretch;
  height: 109.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px 38px 0px 55px;
  margin: 0px 0px 21.84px 0px;
`;
const WhiteFlexColumn = styled.div`
  border-width: 0.8px;
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  height: 100.18px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 6.23px;
  padding: 2.41px 4.15px 2.41px 8px;
  margin: 0px 40px 0px 0px;
`;
const FlexRow3 = styled.div`
  height: 21.68px;
  display: flex;
  flex-direction: row;
  gap: 83.3px;
  align-items: flex-start;
  padding: 0px 1.75px 0px 2px;
`;
const Text5 = styled.div`
  width: 81.7px;
  height: 18.4px;
  display: flex;
  font-size: 24.92px;
  font-family: Inter;
  font-weight: 600;
  line-height: 12.46px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Line = styled.img`
  width: 4.87px;
  height: 4.67px;
  align-self: flex-start;
  margin: 3px 0px 0px 0px;
`;
const WhiteFlexColumn1 = styled.div`
  border-width: 0.8px;
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  height: 100.16px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 6.23px;
  padding: 2.42px 4.15px 2.42px 8px;
  margin: 0px 1020px 0px 0px;
`;
const FlexRow5 = styled.div`
  height: 19.28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 34px;
  align-items: flex-start;
  padding: 0px 1px;
`;
const Text6 = styled.div`
  width: 132px;
  height: 18.6px;
  display: flex;
  font-size: 19.96px;
  font-family: Inter;
  font-weight: 600;
  line-height: 9.98px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Line1 = styled.img`
  width: 4.87px;
  height: 4.67px;
  align-self: flex-start;
  margin: 3.01px 0px 0px 0px;
`;
const Buttons = styled.button`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 30.61px 0px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const BaseButton = styled.div`
  background-color: #64cf82;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 3.91px;
  padding: 5.86px 9.77px;
`;
const Label = styled.div`
  display: flex;
  font-size: 13.67px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 19.54px;
  color: #ffffff;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 5.86px;
`;
const FlexRow6 = styled.div`
  align-self: stretch;
  height: 36.11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0px 75px;
  margin: 0px 0px 28.01px 0px;
`;
const Text7 = styled.div`
  font-size: 11.22px;
  font-family: DM Sans;
  font-weight: 700;
  color: #005a1b;
  align-self: center;
  margin: 0px 28px 0px 0px;
`;
const WhiteFlexColumn2 = styled.div`
  width: 67.3px;
  height: 32.1px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 22.7px 0px 0px;
`;
const Text8 = styled.div`
  width: 80.9px;
  height: 13.6px;
  font-size: 9.85px;
  font-family: DM Sans;
  font-weight: 700;
  color: #606266;
  position: absolute;
  top: 10.42px;
  left: 8px;
`;
const Arrowrightblackdp4 = styled.img`
  width: 19.23px;
  height: 19.23px;
  position: absolute;
  top: 7.21px;
  left: 69.77px;
`;
const Text9 = styled.div`
  width: 32.9px;
  height: 13.6px;
  font-size: 9.85px;
  font-family: DM Sans;
  font-weight: 700;
  color: #606266;
  position: absolute;
  top: 11.22px;
  left: 28px;
`;
const Text10 = styled.div`
  width: 31.3px;
  height: 13.6px;
  font-size: 9.85px;
  font-family: DM Sans;
  font-weight: 700;
  color: #606266;
  position: absolute;
  top: 11.22px;
  left: 24px;
`;
const Element25 = styled.div`
  width: 123px;
  height: 36.1px;
  align-self: flex-start;
  position: relative;
  margin: 0px 153px 0px 0px;
`;
const FernFlexRow = styled.div`
  height: 17.6px;
  background-color: rgba(100, 207, 130, 0.59);
  display: flex;
  position: absolute;
  top: 11.22px;
  left: 346px;
  flex-direction: row;
  align-items: center;
  border-radius: 6.29px;
  padding: 4.01px 37.1px 3.19px 29px;
`;
const Text11 = styled.div`
  width: 48.9px;
  height: 17.6px;
  font-size: 12.88px;
  font-family: DM Sans;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.95);
`;
const Arrowrightblackdp = styled.img`
  width: 25.15px;
  height: 25.15px;
  position: absolute;
  top: 11.03px;
  left: 404.85px;
`;
const Text12 = styled.div`
  font-size: 14.52px;
  font-family: DM Sans;
  font-weight: 700;
  margin: 0px 0px 1.88px 0px;
`;
const FlexRow7 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 22px;
  margin: 0px 0px 12.05px 0px;
`;
const SilverFlexRow = styled.div`
  width: 1635px;
  height: 9.62px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8.01px;
  padding: 19.23px 12px 19.25px 12px;
  margin: 0px 0px 12.81px 0px;
`;
const SilverFlexRow1 = styled.div`
  width: 1631px;
  height: 9.62px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8.01px;
  padding: 19.23px 14px 19.25px 14px;
  margin: 0px 0px 13.61px 0px;
`;
const SilverFlexRow2 = styled.div`
  width: 1629px;
  height: 9.62px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8.01px;
  padding: 19.23px 15px 19.25px 15px;
  margin: 0px 3px 12.01px 0px;
`;
const SilverFlexRow3 = styled.div`
  width: 1627px;
  height: 9.62px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8.01px;
  padding: 17.63px 16px 20.85px 16px;
  margin: 0px 3px 14.41px 0px;
`;
const Element31 = styled.div`
  width: 1298px;
  height: 46.5px;
  align-self: flex-start;
  position: relative;
  margin: 0px 0px 34.45px 54px;
`;
const SilverFlexRow4 = styled.div`
  width: 1625px;
  height: 9.62px;
  background-color: rgba(196, 196, 196, 0.22);
  display: flex;
  position: absolute;
  top: -1.6px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8.01px;
  padding: 19.23px 17px 19.25px 17px;
`;
const FlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44.88px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -229.21px;
  left: 1472px;
  padding: 0px 8.01px;
`;
const FlexColumn6 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44.88px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -227.61px;
  left: 1160px;
  padding: 0px 44.88px;
`;
const FlexColumn7 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45.68px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -230.82px;
  left: 1331px;
  padding: 0px 19.23px;
`;
const FlexColumn10 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44.88px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -227.61px;
  left: 298px;
  padding: 0px 7.21px;
`;
const FlexColumn11 = styled.div`
  width: 67px;
  height: 260px;
  display: flex;
  position: absolute;
  top: -229.21px;
  left: 456px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0.3px 0px 0px;
`;
const LoadMore = styled.div`
  display: flex;
  font-size: 11.3px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 16.14px;
  color: rgba(54, 47, 47, 0.9);
  align-self: center;
  width: 81.7px;
  height: 17px;
  background-color: rgba(189, 189, 189, 0.55);
  flex-direction: row;
  justify-content: center;
  border-radius: 12.57px;
  padding: 1.99px 0px 2.31px 0px;
  white-space: pre-wrap;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Image4 = styled.img`
  width: 35.26px;
  height: 35.26px;
`;
const Image5 = styled.img`
  width: 8.37px;
  height: 12.02px;
  align-self: flex-start;
  margin: 4.8px 0px 0px 0px;
`;
const Text4 = styled.div`
  font-size: 14.43px;
  font-family: DM Sans;
  font-weight: 700;
  letter-spacing: 0.72px;
  line-height: 12.46px;
  color: rgba(0, 0, 0, 0.5);
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const ScreaminGreenFlexRow = styled.div`
  height: 12px;
  background-color: rgba(92, 225, 129, 0.19);
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 4.23px;
  align-items: center;
  border-radius: 26px;
  padding: ${(props) => props.padding};
`;
const Element21 = styled.div`
  font-size: 7.72px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 11.03px;
  color: #005a1c;
  white-space: pre-wrap;
`;
const WhiteFlexRow = styled.div`
  height: 32.1px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const WhiteRectangle1 = styled.div`
  height: 32.9px;
  background-color: #f9f9f9;
  position: relative;
  border-radius: 4.81px;
  width: ${(props) => props.width};
`;
const Arrowrightblackdp3 = styled.img`
  width: 19.23px;
  height: 19.23px;
  position: absolute;
  top: 8.81px;
  left: ${(props) => props.left};
`;
const Element26 = styled.div`
  border-width: 0.8px;
  border-color: #000000;
  border-style: solid;
  width: 9.62px;
  height: 9.62px;
  border-radius: 2.4px;
  margin: ${(props) => props.margin};
`;
const SVNumber = styled.div`
  font-size: 12.82px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 15.71px;
  white-space: pre-wrap;
  margin: ${(props) => props.margin};
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44.88px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -229.21px;
  padding: 0px 9.62px;
  left: ${(props) => props.left};
`;
const Text23 = styled.div`
  font-size: 11.22px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 15.71px;
  color: rgba(0, 0, 0, 0.7);
  text-align: ${(props) => props.textAlign};
`;
const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44.88px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -229.21px;
  left: ${(props) => props.left};
`;
const FlexColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44.88px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -229.21px;
  padding: 0px 16.03px;
  left: ${(props) => props.left};
`;
const Text33 = styled.div`
  text-align: center;
  font-size: 16.03px;
  font-family: DM Sans;
  font-weight: 400;
  line-height: 15.71px;
`;
const Text43 = styled.div`
  font-size: 11.22px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 15.71px;
`;
const Text70 = styled.div`
  font-size: 11.22px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 15.71px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0px 0px 44.91px 0px;
`;

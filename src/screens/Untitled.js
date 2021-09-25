import React, { Component } from "react";
import styled, { css } from "styled-components";
import Menu2 from "../components/Menu2";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function Untitled(props) {
  return (
    <Container>
      <Rect4 gradientImage="Gradient_uAhYckg.png">
        <CurrencyConverter>Currency Converter</CurrencyConverter>
      </Rect4>
      <LoremIpsum>
        This is a web application that helps you convert between currencies.
      </LoremIpsum>
      <RectRow>
        <Rect>
          <SelectCurrency1>Select Currency 1</SelectCurrency1>
        </Rect>
        <Menu2Stack>
          <Menu2
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 40,
              width: 370,
              overflow: "visible"
            }}
          ></Menu2>
          <SelectCurrency2>Select Currency 2</SelectCurrency2>
        </Menu2Stack>
      </RectRow>
      <Rect2Row>
        <Rect2>
          <EnterAmount>Enter amount:</EnterAmount>
        </Rect2>
        <Rect3>
          <EnterAmount1>Enter amount:</EnterAmount1>
        </Rect3>
      </Rect2Row>
      <Rect5>
        <DcdcdRow>
          <Dcdcd>Made with love by XYZ</Dcdcd>
          <LoremIpsum2></LoremIpsum2>
          <LoremIpsum3>See our source code on GitHub</LoremIpsum3>
          <FontAwesomeIcon
            name="github"
            style={{
              color: "rgba(128,128,128,1)",
              fontSize: 50,
              height: 50,
              width: 43,
              marginLeft: 14
            }}
          ></FontAwesomeIcon>
        </DcdcdRow>
      </Rect5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(79,26,184,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Rect4 = styled.div`
  width: 1366px;
  height: 151px;
  background-color: #fff;
  flex-direction: column;
  display: flex;
`;

const CurrencyConverter = styled.span`
  font-family: Comic Sans MS;
  font-style: normal;
  font-weight: 400;
  color: rgba(48,10,36,1);
  font-size: 55px;
  margin-top: 32px;
  margin-left: 467px;
`;

const LoremIpsum = styled.span`
  font-family: Akaya Kanadaka;
  font-style: normal;
  font-weight: regular;
  color: rgba(245,245,245,1);
  font-size: 42px;
  margin-top: 53px;
  margin-left: 109px;
`;

const Rect = styled.div`
  width: 370px;
  height: 40px;
  background-color: rgba(208,205,156,1);
  flex-direction: column;
  display: flex;
`;

const SelectCurrency1 = styled.span`
  font-family: Amarante;
  font-style: normal;
  font-weight: 400;
  color: rgba(48,10,36,1);
  font-size: 26px;
  margin-top: 4px;
  margin-left: 79px;
`;

const SelectCurrency2 = styled.span`
  font-family: Amarante;
  top: 4px;
  left: 88px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(48,10,36,1);
  font-size: 26px;
`;

const Menu2Stack = styled.div`
  width: 370px;
  height: 40px;
  margin-left: 280px;
  position: relative;
`;

const RectRow = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 74px;
  margin-left: 157px;
  margin-right: 189px;
`;

const Rect2 = styled.div`
  width: 370px;
  height: 39px;
  background-color: rgba(208,208,188,1);
  flex-direction: column;
  display: flex;
  margin-top: 2px;
`;

const EnterAmount = styled.span`
  font-family: Almendra;
  font-style: normal;
  font-weight: 400;
  color: rgba(48,10,36,1);
  font-size: 26px;
  margin-top: 3px;
  margin-left: 3px;
`;

const Rect3 = styled.div`
  width: 370px;
  height: 39px;
  background-color: rgba(225,215,215,1);
  flex-direction: column;
  display: flex;
  margin-left: 280px;
`;

const EnterAmount1 = styled.span`
  font-family: Almendra;
  font-style: normal;
  font-weight: 400;
  color: rgba(48,10,36,1);
  font-size: 26px;
  margin-top: 5px;
  margin-left: 17px;
`;

const Rect2Row = styled.div`
  height: 41px;
  flex-direction: row;
  display: flex;
  margin-top: 139px;
  margin-left: 157px;
  margin-right: 189px;
`;

const Rect5 = styled.div`
  width: 1366px;
  height: 62px;
  background-color: rgba(0,0,0,1);
  flex-direction: row;
  display: flex;
  margin-top: 157px;
`;

const Dcdcd = styled.span`
  font-family: Comic Sans MS;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 31px;
  margin-top: 7px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-left: 241px;
  margin-top: 25px;
`;

const LoremIpsum3 = styled.span`
  font-family: Baskervville;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 25px;
  margin-left: 112px;
  margin-top: 9px;
`;

const DcdcdRow = styled.div`
  height: 50px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 146px;
  margin-left: 134px;
  margin-top: 3px;
`;

export default Untitled;

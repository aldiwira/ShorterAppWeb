import styled from "styled-components";

const Title = styled.h1`
  text-align: left;
  color: black;
  @media only screen and (min-width: 320px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 50px;
  }
`;

const SecTitle = styled.p`
  color: black;
  text-align: center;
  @media only screen and (min-width: 320px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #efefef;
  border-radius: 50px;
  @media only screen and (min-width: 320px) {
    height: 350px;
    width: 350px;
  }
  @media only screen and (min-width: 1024px) {
    height: 500px;
    width: 500px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: #4b7bec;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Wrapper, Content, BtnWrap, SecTitle, Title };

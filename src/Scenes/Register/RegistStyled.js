import styled from "styled-components";

const Title = styled.h1`
  color: black;
  @media only screen and (min-width: 320px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 50px;
  }
`;

const LoadingDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-self: center;
  position: absolute;
`;

const SecTitle = styled.p`
  color: black;
  @media only screen and (min-width: 320px) {
    font-size: 15px;
    padding-top: 5px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 18px;
    padding-top: 10px;
  }
`;

const WrapCenter = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  background: #efefef;
  @media only screen and (min-width: 320px) {
    height: 450px;
    width: 350px;
    padding: 20px;
    border-radius: 20px;
  }
  @media only screen and (min-width: 1024px) {
    height: 500px;
    width: 500px;
    padding: 40px;
    border-radius: 50px;
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

export { Wrapper, Content, WrapCenter, Title, SecTitle, LoadingDiv };

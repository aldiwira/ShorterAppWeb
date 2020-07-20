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

const LoadingDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-self: center;
  position: absolute;
`;

const SecTitle = styled.p`
  margin-top: 10px;
  color: black;
  @media only screen and (min-width: 320px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
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
    height: 400px;
    width: 350px;
    padding: 25px;
    border-radius: 25px;
  }
  @media only screen and (min-width: 1024px) {
    height: 500px;
    width: 450px;
    padding: 50px;
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

export { Wrapper, WrapCenter, Content, SecTitle, Title, LoadingDiv };

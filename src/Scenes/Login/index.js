import React, { Fragment } from "react";
import styled from "styled-components";
import { Button, Input } from "semantic-ui-react";

const Index = () => {
  const onClickLogin = () => {
    console.log("sjdias");
  };
  return (
    <Fragment>
      <Wrapper>
        <Content>
          <Title>Login</Title>
          <SecTitle>Username</SecTitle>
          <Input type='text' />
          <SecTitle>Password</SecTitle>
          <Input type='password' />
          <WrapCenter>
            <Button
              onClick={onClickLogin.bind(this)}
              size='large'
              color='google plus'>
              Login
            </Button>
          </WrapCenter>
        </Content>
      </Wrapper>
    </Fragment>
  );
};

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
  margin-top: 10px;
  color: black;
  @media only screen and (min-width: 320px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

const WrapCenter = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
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
    height: 450px;
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

export default Index;

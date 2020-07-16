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
          <Title>Register</Title>
          <SecTitle>Username</SecTitle>
          <Input type='text' />
          <SecTitle>Email</SecTitle>
          <Input type='email' />
          <SecTitle>Password</SecTitle>
          <Input type='password' />
          <WrapCenter>
            <Button
              onClick={onClickLogin.bind(this)}
              size='large'
              color='google plus'>
              Register
            </Button>
          </WrapCenter>
        </Content>
      </Wrapper>
    </Fragment>
  );
};

const Title = styled.h1`
  color: black;
  @media only screen and (min-width: 320px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 50px;
  }
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

export default Index;

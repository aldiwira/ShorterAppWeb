import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Button, Input, Loader, Dimmer } from "semantic-ui-react";
import Axios from "axios";

const Index = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [userError, setuserError] = useState(false);
  const [passError, setpassError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const onClickLogin = async () => {
    seterrorMsg("");
    setisLoading(true);
    setuserError(false);
    setpassError(false);
    if (!Username && !Password) {
      setuserError(true);
      setpassError(true);
      setisLoading(false);
    } else {
      await Axios({
        method: "POST",
        url: "http://127.0.0.1:2000/login",
        data: {
          username: Username,
          password: Password,
        },
      })
        .then((response) => {
          console.log(response);
          setisLoading(false);
        })
        .catch((error) => {
          setisLoading(false);
          const err = error.response.data;
          const errBdy = err.massage;
          const errEr = err.errors;
          if (errBdy) {
            seterrorMsg(errBdy);
          } else if (errEr) {
            errEr.map((val) => {
              seterrorMsg(val.msg);
            });
          }
        });
    }
  };
  return (
    <Fragment>
      <Wrapper>
        <Content>
          <LoadingDiv>
            <Loader active={isLoading} inline='centered' />
          </LoadingDiv>
          <Title>Login</Title>
          <SecTitle>Username</SecTitle>
          <Input
            type='text'
            value={Username}
            error={userError}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <SecTitle>Password</SecTitle>
          <Input
            type='password'
            value={Password}
            error={passError}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <WrapCenter>
            <Button
              onClick={onClickLogin.bind(this)}
              size='large'
              color='google plus'>
              Login
            </Button>
            <SecTitle>{errorMsg}</SecTitle>
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

export default Index;

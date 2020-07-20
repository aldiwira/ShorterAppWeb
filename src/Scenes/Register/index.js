import React, { Fragment, useState } from "react";
import {
  SecTitle,
  Title,
  Wrapper,
  WrapCenter,
  Content,
  LoadingDiv,
} from "./RegistStyled";
import { Button, Input, Loader } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { Api } from "../../Helper/Api";
import { LStorage, tokenKey, userKey } from "../../Helper/LocalStorage";

const Index = () => {
  const [userdatas, setuserdatas] = useState({
    username: null,
    email: null,
    password: null,
  });
  const [errorMsg, seterrorMsg] = useState(null);
  const [isError, setisError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const history = useHistory();

  const onClickLogin = async () => {
    setisLoading(true);
    seterrorMsg(null);
    await Api.post("/register", userdatas)
      .then((response) => {
        setisLoading(false);
        const datas = response.data.data;
        LStorage.setItem(userKey, JSON.stringify(datas.account));
        LStorage.setItem(tokenKey, datas.token);
        history.push("/");
      })
      .catch((errors) => {
        setisLoading(false);
        setisError(true);
        const errorEntity = errors.response.data.errors;
        seterrorMsg(errorEntity[0].msg);
      });
  };

  return (
    <Fragment>
      <Wrapper>
        <Content>
          <LoadingDiv>
            <Loader active={isLoading} inline='centered' />
          </LoadingDiv>
          <Title>Register</Title>
          <SecTitle>Username</SecTitle>
          <Input
            type='text'
            error={isError}
            onChange={(event) => {
              const value = event.target.value;
              setuserdatas({ ...userdatas, username: value });
            }}
          />
          <SecTitle>Email</SecTitle>
          <Input
            type='email'
            error={isError}
            onChange={(event) => {
              const value = event.target.value;
              setuserdatas({ ...userdatas, email: value });
            }}
          />
          <SecTitle>Password</SecTitle>
          <Input
            type='password'
            error={isError}
            onChange={(event) => {
              const value = event.target.value;
              setuserdatas({ ...userdatas, password: value });
            }}
          />
          <WrapCenter>
            <Button
              onClick={onClickLogin.bind(this)}
              size='large'
              color='google plus'>
              Register
            </Button>
            <SecTitle>{errorMsg}</SecTitle>
          </WrapCenter>
        </Content>
      </Wrapper>
    </Fragment>
  );
};

export default Index;

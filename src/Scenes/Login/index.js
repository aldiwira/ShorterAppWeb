import React, { Fragment, useState } from "react";
import { Button, Input, Loader } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { Api } from "../../Helper/Api";
import { LStorage, tokenKey, userKey } from "../../Helper/LocalStorage";
import {
  LoadingDiv,
  Title,
  SecTitle,
  Content,
  WrapCenter,
  Wrapper,
} from "./LoginStyled";

const Index = () => {
  const [userDatas, setuserDatas] = useState({
    username: null,
    password: null,
  });
  const [isError, setisError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const history = useHistory();

  const onClickLogin = async () => {
    LStorage.clearAll();
    seterrorMsg("");
    setisLoading(true);
    setisError(false);
    await Api.post("/login", userDatas)
      .then((response) => {
        const datas = response.data.data;
        setisLoading(false);
        LStorage.setItem(userKey, JSON.stringify(datas.account));
        LStorage.setItem(tokenKey, datas.token);
        history.push("/");
      })
      .catch((error) => {
        setisLoading(false);
        setisError(true);
        console.log(error.response);
        const errorUnit = error.response.data.errors;
        const errorUser = error.response.data.massage;
        if (errorUser) {
          seterrorMsg(errorUser);
        } else if (errorUnit) {
          seterrorMsg("Please correct your username and password");
        }
      });
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
            value={userDatas.username}
            error={isError}
            onChange={(event) => {
              setuserDatas({ ...userDatas, username: event.target.value });
            }}
          />
          <SecTitle>Password</SecTitle>
          <Input
            type='password'
            value={userDatas.password}
            error={isError}
            onChange={(event) => {
              setuserDatas({ ...userDatas, password: event.target.value });
            }}
          />
          <WrapCenter>
            <Button
              onClick={onClickLogin.bind(this)}
              size='large'
              disabled={isLoading}
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

export default Index;

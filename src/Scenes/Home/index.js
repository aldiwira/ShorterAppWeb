import React, { Fragment, useEffect, useState } from "react";
import { Button, Loader } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import {
  Wrapper,
  Content,
  Title,
  SecTitle,
  BtnWrap,
  LoadingDiv,
} from "./HomeStyled";
import { LStorage, userKey, tokenKey } from "../../Helper/LocalStorage";

const Index = () => {
  useEffect(() => {
    if (tokenData && userDatas) {
      setisLoading(true);
      setTimeout(() => {
        history.push("/home");
      }, 1000);
    }
  });

  const [isLoading, setisLoading] = useState(false);
  const tokenData = LStorage.getItem(tokenKey);
  const userDatas = LStorage.getItem(userKey);
  const history = useHistory();

  return (
    <Fragment>
      <Wrapper>
        <Content>
          <LoadingDiv>
            <Loader active={isLoading} inline='centered' />
          </LoadingDiv>
          <Title>Shorter Link</Title>
          <SecTitle>This project was build by @aldiwira</SecTitle>
          <BtnWrap>
            <Button.Group size='big'>
              <Link to='/login'>
                <Button color='google plus'>Login</Button>
              </Link>
              <div style={{ marginLeft: 5, marginRight: 5 }} />
              <Link to='/register'>
                <Button color='linkedin'>Register</Button>
              </Link>
            </Button.Group>
          </BtnWrap>
        </Content>
      </Wrapper>
    </Fragment>
  );
};

export default Index;

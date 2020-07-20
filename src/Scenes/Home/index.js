import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Title, SecTitle, BtnWrap } from "./HomeStyled";

const Index = () => {
  return (
    <Fragment>
      <Wrapper>
        <Content>
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

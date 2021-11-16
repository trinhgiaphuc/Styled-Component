import React, { Fragment, useState } from 'react';
import {
  Input,
  PasswordInput,
  PageLayout,
  Button,
  Spinner,
} from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
    color: #666;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`;

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    setUser({ username: username.value, password: password.value });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Input name="username" type="text" placeholder="Username" />
            <PasswordInput name="password" />
            <Button type="submit" large>
              Login
            </Button>
            <div className="alt-text">or</div>
            <Button type="button" secondary>
              Register
            </Button>
          </Fragment>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;

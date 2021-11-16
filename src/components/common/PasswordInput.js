import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import { Input } from './Input';

const PasswordInputStyled = styled(Input).attrs({
  placeholder: 'Password',
})`
  outline: none;

  &:focus,
  &:focus ~ button {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  ${p =>
    !p.showButton
      ? css`
          display: block;
          width: 100%;
        `
      : css`
          display: inline-block;
          width: 80%;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `}
`;

const ShowButton = styled.button`
  width: 20%;
  height: 40px;
  box-sizing: border-box;
  font-size: 0.9em;
  border: 1px solid #ccc;
  border-left: 0;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`;

export const PasswordInput = props => {
  const [showPassword, setShowPassword] = useState(null);
  const [showButton, setShowButton] = useState(false);

  return (
    <Fragment>
      <PasswordInputWrapper>
        <PasswordInputStyled
          {...props}
          showButton={showButton}
          type={showPassword ? 'text' : 'password'}
          onChange={() => setShowButton(true)}
        />
        {showButton ? (
          <ShowButton
            type="button"
            onClick={() => setShowPassword(showPassword => !showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </ShowButton>
        ) : null}
      </PasswordInputWrapper>
    </Fragment>
  );
};

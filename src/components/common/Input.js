import styled from 'styled-components';

export const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  font-family: 'Open Sans';
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  outline: none;

  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

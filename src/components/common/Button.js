import styled, { css } from 'styled-components';

const largeStyle = ({ large }) => {
  return large
    ? css`
        padding: 10px;
        border-radius: 5px;
        font-size: 1.5em;
      `
    : css`
        padding: 8px;
        border-radius: 4px;
        font-size: 1em;
      `;
};

const Button = styled.button`
  background: ${p =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  color: white;
  font-weight: bold;
  ${largeStyle}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };

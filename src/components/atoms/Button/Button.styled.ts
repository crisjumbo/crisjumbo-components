import styled from 'styled-components';

export const ButtonBase = styled.button`
  cursor: pointer;
  border: none;
  display: inline-block;
  font-size: 14px;
  line-height: 1.5;
  padding: 8px 16px;
  text-align: center;
  border-radius: 4px;
`;

export const DefaultButton = styled(ButtonBase)`
  height: 32px;
  width: 96px;
  background-color: white;
  color: black;
`;
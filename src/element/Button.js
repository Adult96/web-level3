import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  return <BtnElement {...props}>{props.children}</BtnElement>;
}

const BtnElement = styled.button`
  display: ${props => props.display};
  justify-content: ${props => props.justify};
  align-items: ${props => props.items};
  width: ${props => props.width};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  border: ${props => props.border};
  border-radius: ${props => props.borderR};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  cursor: pointer;
  &:active {
    background-color: ${props => props.activeBgColor};
  }
`;

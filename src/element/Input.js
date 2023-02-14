import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  return <InputElement {...props} />;
}

const InputElement = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  border: ${props => props.border};
  border-radius: ${props => props.borderR};
  outline: ${props => props.outline};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  &:focus {
    border: ${props => props.focusBorder};
  }
`;

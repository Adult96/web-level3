import React, { useState } from 'react';
import Button from '../element/Button';
import { BiDownArrow } from 'react-icons/bi';
import styled from 'styled-components';
import { Color, BorderRadius } from '../styles/Theme';

export default function SelectBox() {
  const [showMenu, setShowMenu] = useState({
    leftMenu: false,
    rightMenu: false,
  });

  const handleShowMenu = menu => {
    if (menu) {
      return setShowMenu(menu => ({ ...menu, leftMenu: !menu.leftMenu }));
    }
    return setShowMenu(menu => ({ ...menu, rightMenu: !menu.rightMenu }));
  };

  return (
    <Section>
      <h1>Select</h1>
      <Selects>
        <Select>
          <Button
            {...BtnStyle}
            onClick={() => {
              handleShowMenu(true);
            }}
          >
            <span>리액트</span>
            <BiDownArrow />
          </Button>
          <Menu
            position='absolute'
            display={showMenu.leftMenu ? 'flex' : 'none'}
          >
            <Itme>리액트</Itme>
            <Itme>자바</Itme>
            <Itme>파이썬</Itme>
            <Itme>타입스크립트</Itme>
          </Menu>
        </Select>
        <Select>
          <Button
            {...BtnStyle}
            onClick={() => {
              handleShowMenu(false);
            }}
          >
            <span>리액트</span>
            <BiDownArrow />
          </Button>
          <Menu
            position='static'
            display={showMenu.rightMenu ? 'flex' : 'none'}
          >
            <Itme>리액트</Itme>
            <Itme>자바</Itme>
            <Itme>파이썬</Itme>
            <Itme>타입스크립트</Itme>
          </Menu>
        </Select>
      </Selects>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 230px;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid ${Color.light_grey};
  border-radius: ${BorderRadius.small};
  overflow: hidden;
`;

const Selects = styled.div`
  display: flex;
`;

const Select = styled.div`
  width: 20rem;
  padding: 1rem;
`;

const Menu = styled.div`
  position: ${props => props.position};
  display: ${props => props.display};
  flex-direction: column;
  width: 15rem;
  margin: 1rem 0;
  border: 1px solid ${Color.light_grey};
  border-radius: ${BorderRadius.small};
  background-color: ${Color.white};
`;

const Itme = styled.span`
  padding: 1rem;
  &:hover {
    background-color: ${Color.light_grey};
  }
`;

const BtnStyle = {
  display: 'flex',
  justify: 'space-between',
  width: '15rem',
  padding: '1rem',
  bgColor: Color.trans,
  borderR: BorderRadius.small,
};

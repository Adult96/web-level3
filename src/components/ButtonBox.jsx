import React from 'react';
import Button from '../element/Button';
import { AiOutlineBell } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Color, BorderRadius, FontWeight } from '../styles/Theme';

export default function ButtoBox() {
  return (
    <>
      <h1>button</h1>
      <div>
        <Button
          {...large('', Color.mint)}
          onClick={() => alert('버튼을 만들어보세요')}
        >
          Large Primary Button
          <MdKeyboardArrowRight />
        </Button>
        <Button {...medium('', Color.mint, Color.dark_mint)}>Medium</Button>
        <Button {...small('', Color.mint, Color.dark_mint)}>Small</Button>
      </div>
      <div>
        <Button
          {...large(Color.dark_pink, Color.ligth_pink)}
          onClick={() => prompt('어렵나요?')}
        >
          Large Primary Button
          <AiOutlineBell />
        </Button>
        <Button {...medium(Color.dark_pink, Color.ligth_pink, Color.pink)}>
          Medium
        </Button>
        <Button {...small(Color.dark_pink, Color.ligth_pink, Color.pink)}>
          Small
        </Button>
      </div>
    </>
  );
}

const large = (color, bdcolor) => {
  return {
    padding: '1rem',
    margin: '1rem',
    border: `2px solid ${bdcolor}`,
    borderR: BorderRadius.small,
    bgColor: 'transparent',
    color: color,
    weight: FontWeight.bold,
    activeBgColor: Color.light_white,
  };
};

const medium = (color, bgcolor, activeBgColor) => {
  return {
    padding: '1rem',
    margin: '1rem',
    border: 'none',
    borderR: BorderRadius.small,
    bgColor: bgcolor,
    color: color,
    activeBgColor: activeBgColor,
  };
};

const small = (color, bgcolor, activeBgColor) => {
  return {
    padding: '0.8rem',
    margin: '1rem',
    border: 'none',
    borderR: BorderRadius.small,
    bgColor: bgcolor,
    color: color,
    activeBgColor: activeBgColor,
  };
};

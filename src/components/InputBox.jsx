import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import Input from '../element/Input';
import { Color, BorderRadius, FontWeight } from '../styles/Theme';

export default function InputBox() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`name: ${name} price: ${price.replace(/[,]/g, '')}`);
  };

  const handlePrice = e => {
    let number = e.target.value;
    number = Number(number.replace(/[,]/g, ''));
    if (Number.isNaN(Number(number))) return;
    setPrice(number.toLocaleString('ko-KR'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>이름</label>
        <Input
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
          {...inputStyle}
        />
      </div>
      <div>
        <label htmlFor='price'>가격</label>
        <Input
          name='price'
          value={price}
          onChange={e => handlePrice(e)}
          {...inputStyle}
        />
      </div>
      <Button {...btnStyle}>저장</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  gap: 30px;
`;

const inputStyle = {
  width: '10rem',
  height: '2rem',
  padding: '0 1rem',
  margin: '1rem 0',
  border: `1px solid ${Color.light_grey}`,
  borderR: BorderRadius.small,
  outline: 'none',
  weight: FontWeight.bold,
  focusBorder: `2px solid ${Color.black}`,
};

const btnStyle = {
  padding: '0 1rem',
  border: `none`,
  borderR: BorderRadius.small,
  bgColor: Color.mint,
  weight: FontWeight.bold,
  activeBgColor: Color.light_white,
};

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import { Color, BorderRadius } from '../styles/Theme';

export default function ModalBox() {
  const [modal, setModal] = useState({
    show: false,
    popup: false,
  });

  const handleModal = popup => {
    console.log(modal.show, modal.popup);
    setModal({
      show: true,
      popup: popup,
    });
  };

  const handleCloseModal = (e, action) => {
    const id = e.target.id;
    switch (action) {
      case 'inside':
        setModal(value => ({
          ...value,
          show: false,
        }));
        break;
      case 'outside':
        if (id === 'modal' && modal.popup) {
          setModal(value => ({
            ...value,
            show: false,
          }));
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Button
        {...btnStyle('none', BorderRadius.small, Color.mint)}
        onClick={() => {
          handleModal(false);
        }}
      >
        open modal
      </Button>
      <Button
        {...btnStyle(
          `1px solid ${Color.pink}`,
          BorderRadius.small,
          Color.trans
        )}
        onClick={() => {
          handleModal(true);
        }}
      >
        open modal
      </Button>
      <Modal
        id='modal'
        display={modal.show ? 'flex' : 'none'}
        onClick={e => {
          handleCloseModal(e, 'outside');
        }}
      >
        <Inside display={modal.popup ? 'none' : 'flex'}>
          <p>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </p>
          <div>
            <Button
              onClick={e => {
                handleCloseModal(e, 'inside');
              }}
            >
              닫기
            </Button>
            <Button
              onClick={e => {
                handleCloseModal(e, 'inside');
              }}
            >
              확인
            </Button>
          </div>
        </Inside>
        <Outside display={modal.popup ? 'flex' : 'none'}>
          <span>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</span>
          <Button
            {...btnStyle(
              `1px solid ${Color.pink}`,
              BorderRadius.small,
              Color.trans
            )}
          >
            X
          </Button>
        </Outside>
      </Modal>
    </>
  );
}

const Modal = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => props.display};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.7);
  z-index: 100;
`;

const Inside = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  height: 20rem;
  padding: 3rem 1rem;
  background-color: ${() => Color.light_white};
  z-index: 1000;
`;

const Outside = styled.div`
  display: ${props => props.display};
  align-items: center;
  width: 20rem;
  height: 20rem;
  padding: 3rem 1rem;
  background-color: ${() => Color.light_white};
  z-index: 1000;
`;

const btnStyle = (borderColor, borderR, bgColor) => ({
  margin: '1rem',
  padding: '1rem',
  border: borderColor,
  borderR: borderR,
  bgColor: bgColor,
});

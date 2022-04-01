import React from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
const ContentDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  padding: 80px 35px;
  transform: translate(-50%, -50%);
  background: white;

  font-family: "Montserrat Alternates";
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
`;

const ModalBtn = styled.button`
  background: #04498e;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
  padding: 7px 70px;
  margin-top: 80px;
  cursor: pointer;
`;

export const StyledModal = ({ handleClose, show, children }) => {
  return (
    <ModalDiv block={show ? "block" : "none"}>
      <ContentDiv>
        {children}
        <ModalBtn onClick={handleClose}>OK</ModalBtn>
      </ContentDiv>
    </ModalDiv>
  );
};

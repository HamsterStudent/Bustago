import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { media } from "../style/media";

interface IDialog {
  children?: ReactNode;
}
interface IDialogMainProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: boolean;
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Title = styled.h1`
  font: 700 3.6rem "Inter";
  margin-bottom: 30px;
  ${media.phone`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    height: 44px;
    font: 400 1.6rem "Inter";
    background: #9E9E9E;
  `}
`;

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #2525257d;
`;

const Close = styled.div`
  width: 22px;
  height: 22px;
  img {
    width: 100%;
    object-fit: contain;
  }
  ${media.phone`
    width: 15px;
    height: 15px;
    position: absolute;
    right: 15px;
    top: 15px;
    object-fit: contain;
  `}
`;
const Content = styled.div`
  width: 90%;
  max-width: 1125px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  z-index: 1;
  padding: 46px;
  h2 {
    font: 700 3.6rem/3.6rem "Inter";
    margin-bottom: 30px;
  }
  ${media.phone`
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 0;
  `}
`;

const DialogRoot = ({ children, isOpen }: IDialogMainProps) => {
  const dialogRoot = document.getElementById("root");
  if (!dialogRoot) {
    return null;
  }
  if (!isOpen) {
    return null;
  }
  return createPortal(<Wrap>{children}</Wrap>, dialogRoot);
};

const DialogTitle = ({ children }: IDialog) => {
  return <Title>{children}</Title>;
};

const DialogDimmed = ({ onClose }: { onClose: any }) => {
  return <Dimmed onClick={onClose}></Dimmed>;
};

const DialogClose = ({ onClose }: { onClose: any }) => {
  return (
    <Close onClick={onClose}>
      <img src="assets/icon/close.svg" alt="" />
    </Close>
  );
};

const DialogContent = ({ children, ...props }: IDialog) => {
  return <Content>{children}</Content>;
};

export const Dialog = Object.assign(DialogRoot, {
  Title: DialogTitle,
  Content: DialogContent,
  Dimmed: DialogDimmed,
  Close: DialogClose,
});

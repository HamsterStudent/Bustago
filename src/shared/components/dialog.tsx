import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface IDialogTitleProps {
  children?: ReactNode;
}
interface IDialogContentProps {
  children?: ReactNode;
}
interface IDialogMainProps {
  children?: ReactNode;
  isOpen: boolean;
}

const ModalWrap = styled.div`
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

const ModalDimmed = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #2525257d;
`;
const Modal = styled.div`
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
`;

const DialogTitle = ({ children }: IDialogTitleProps) => {
  return <div>{children}</div>;
};

const DialogDimmed = ({ onClose }: { onClose: any }) => {
  return <ModalDimmed onClick={onClose}></ModalDimmed>;
};

const DialogMain = ({ children, isOpen }: IDialogMainProps) => {
  const modalRoot = document.getElementById("root");
  if (!modalRoot) {
    return null;
  }

  if (!isOpen) {
    return null;
  }
  return createPortal(<ModalWrap>{children}</ModalWrap>, modalRoot);
};

const DialogContent = ({ children, ...props }: IDialogContentProps) => {
  return <Modal>{children}</Modal>;
};

export const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  Content: DialogContent,
  Dimmed: DialogDimmed,
});

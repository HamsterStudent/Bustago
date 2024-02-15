import React, { ReactNode, useState } from "react";
import { Dialog } from "../components/dialog";

interface IUseDialog {
  children: ReactNode;
  title?: string;
}

export const useDialog = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => {
    setIsOpen(false);
  };

  const SearchTerminalDialog = ({ children, ...props }: IUseDialog) => (
    <Dialog isOpen={isOpen}>
      <Dialog.Dimmed onClose={closeDialog} />
      <Dialog.Content {...props}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dialog.Title>터미널 검색</Dialog.Title>
          <Dialog.Close onClose={closeDialog}></Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog>
  );

  const SelectSeatDialog = ({ children, ...props }: IUseDialog) => (
    <Dialog isOpen={isOpen}>
      <Dialog.Dimmed onClose={closeDialog} />
      <Dialog.Content {...props}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dialog.Title>{props.title || null}</Dialog.Title>
          <Dialog.Close onClose={closeDialog}></Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog>
  );

  return { SearchTerminalDialog, SelectSeatDialog, openDialog, closeDialog };
};

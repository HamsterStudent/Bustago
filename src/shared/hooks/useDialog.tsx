import React, { ReactNode, useState } from "react";
import { Dialog } from "../components/dialog";

interface IUseDialog {
  children: ReactNode;
}

export const useDialog = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => {
    setIsOpen(false);
    console.log("ahajksdlk");
  };

  const DialogWrapper = ({ children, ...props }: IUseDialog) => (
    <Dialog isOpen={isOpen}>
      <Dialog.Content {...props}>{children}</Dialog.Content>
      <Dialog.Dimmed onClose={closeDialog} />
    </Dialog>
  );

  return { DialogWrapper, openDialog, closeDialog };
};

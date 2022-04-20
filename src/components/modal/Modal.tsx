import React from 'react';

import { IoIosCloseCircle } from 'react-icons/io';

import { ModalBackground, ModalBody, ModalClose } from './styles';

interface ModalProps {
  shouldShow: boolean;
  closeAction?: () => void;
}

export const Modal = ({
  children,
  shouldShow,
  closeAction,
}: React.PropsWithChildren<ModalProps>) => {
  return (
    <>
      {shouldShow && (
        <ModalBackground onClick={closeAction}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={closeAction}>
              <IoIosCloseCircle size="30px" color="#3FB2C1" />
            </ModalClose>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

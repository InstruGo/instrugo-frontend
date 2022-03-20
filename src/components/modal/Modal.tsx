import React from 'react';
import { ModalBackground, ModalBody } from './styles';

interface ModalProps {
  children: React.ReactChild | React.ReactChild[];
  shouldShow: boolean;
  onBackgroundClick?: () => void;
}

export const Modal = ({
  children,
  shouldShow,
  onBackgroundClick,
}: ModalProps) => {
  return (
    <>
      {shouldShow && (
        <ModalBackground onClick={onBackgroundClick}>
          <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

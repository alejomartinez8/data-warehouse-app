import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components/atoms';
import React, { ReactNode } from 'react';
import {
  StyledModal,
  StyledModalDialog,
  StyledModalContent,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter,
  StyledCloseButton,
} from './Modal.styled';

interface IModal {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ header, body, footer, isOpen = false, closeModal }: IModal) => {
  const handelOnClose = () => {
    closeModal();
  };

  return (
    <>
      {isOpen && (
        <StyledModal>
          <StyledModalDialog role="dialog" aria-modal="true">
            <StyledModalContent>
              <StyledModalHeader>
                <StyledCloseButton color="primary" onClick={handelOnClose}>
                  <Icon icon={faWindowClose} color="primary" />
                </StyledCloseButton>
                {header}
              </StyledModalHeader>
              {body && <StyledModalBody>{body}</StyledModalBody>}
              {footer && <StyledModalFooter>{footer}</StyledModalFooter>}
            </StyledModalContent>
          </StyledModalDialog>
        </StyledModal>
      )}
    </>
  );
};

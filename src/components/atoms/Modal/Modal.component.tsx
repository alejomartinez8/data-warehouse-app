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

interface IModalProps {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  size?: 'small' | 'large';
  closeModal: () => void;
}

export const Modal = ({ header, body, footer, isOpen = false, size, closeModal }: IModalProps) => (
  <>
    {isOpen && (
      <StyledModal>
        <StyledModalDialog role="dialog" aria-modal="true" size={size}>
          <StyledModalContent>
            <StyledModalHeader>
              <StyledCloseButton color="primary" onClick={closeModal}>
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

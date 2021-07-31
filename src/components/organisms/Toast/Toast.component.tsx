import React, { useState, useEffect } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components/atoms';
import { useStore } from 'lib/hooks';
import { INotificacion } from 'lib/stores';
import { observer } from 'mobx-react-lite';
import {
  StyledToastBody,
  StyledToastCloseButton,
  StyledToastContainer,
  StyledToastHeader,
  StyledToastTitle,
} from './Toast.styled';

export const Toast = observer(() => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState<INotificacion>();
  const { notificationsLength, shiftNotification } = useStore('notificationsStore');

  useEffect(() => {
    if (notificationsLength > 0) {
      setNotification(shiftNotification());
      setShow(true);
    }
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, [notificationsLength]);

  const handleOnClose = () => setShow(false);

  return (
    <StyledToastContainer show={show}>
      <StyledToastHeader>
        <Icon icon={faInfoCircle} />
        <StyledToastTitle>{notification?.type}</StyledToastTitle>
        <StyledToastCloseButton onClick={handleOnClose}>
          <span aria-hidden="true">x</span>
        </StyledToastCloseButton>
      </StyledToastHeader>
      <StyledToastBody>{notification?.message}</StyledToastBody>
    </StyledToastContainer>
  );
});

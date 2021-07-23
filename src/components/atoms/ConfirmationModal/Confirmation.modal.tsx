import { Button } from 'components/atoms';
import { StyledP } from './ConfrimationModel.styled';

interface IFooterConfirmationModalProps {
  onClose?: () => void;
  onConfirm: () => void;
}

export const HeaderConfirmation = ({ title }) => <h1>{title}</h1>;

export const BodyConfirmation = ({ children }) => <StyledP>{children}</StyledP>;

export const FooterConfirmation = ({ onClose, onConfirm }: IFooterConfirmationModalProps) => (
  <>
    <Button color="secondary" onClick={onClose}>
      No
    </Button>
    <Button color="primary" onClick={onConfirm}>
      Yes
    </Button>
  </>
);

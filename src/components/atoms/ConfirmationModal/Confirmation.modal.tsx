import { Button } from 'components/atoms';
import { StyledP } from './ConfrimationModel.styled';

interface IFooterConfirmationModalProps {
  onClose?: () => void;
  onConfirm: () => void;
}

export const HeaderConfirmationModal = ({ title }) => <h1>{title}</h1>;

export const BodyConfirmationModal = ({ children }) => <StyledP>{children}</StyledP>;

export const FooterConfirmationModal = ({ onClose, onConfirm }: IFooterConfirmationModalProps) => (
  <>
    <Button color="secondary" onClick={onClose}>
      No
    </Button>
    <Button color="primary" onClick={onConfirm}>
      Yes
    </Button>
  </>
);

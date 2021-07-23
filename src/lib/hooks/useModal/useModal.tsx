import { createContext, useContext, ReactNode, useReducer } from 'react';
import { Modal } from 'components/atoms';

interface IState {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  isOpen?: boolean;
  size?: 'small' | 'large';
}

interface IModalContext extends IState {
  setModal: (values: IState) => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContext>(null);

ModalContext.displayName = 'ModalContext';

export const useModal = (): IModalContext => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }

  return context;
};

const modalReducer = (state: IState, action: { type: string; payload?: IState }): IState => {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        header: action.payload.header,
        body: action.payload.body,
        footer: action.payload.footer,
        size: action.payload.size,
        isOpen: true,
      };
    case 'CLOSE_MODAL':
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {
  const initialState = {
    header: null,
    body: null,
    footer: null,
    isOpen: false,
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const setModal = (values: IState) => {
    dispatch({ type: 'SET_MODAL', payload: values });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <ModalContext.Provider value={{ ...state, setModal, closeModal }}>
      {children}
      <Modal
        header={state.header}
        body={state.body}
        footer={state.footer}
        isOpen={state.isOpen}
        size={state.size}
        closeModal={closeModal}
      />
    </ModalContext.Provider>
  );
};

import { createContext, ReactNode, useContext } from 'react';
import { RootStore } from 'lib/stores';
import { enableStaticRendering } from 'mobx-react-lite';
import { isServer } from 'utils';

let stores: RootStore;

export const StoresContext = createContext<RootStore>({} as RootStore);
StoresContext.displayName = 'StoresContext';

enableStaticRendering(isServer);

interface IStoresProviderProps {
  children: ReactNode;
}

export const StoresProvider = ({ children }: IStoresProviderProps) => {
  if (isServer) {
    stores = new RootStore();
  } else {
    stores = stores ?? new RootStore();
  }

  return <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>;
};

export const useStores = () => useContext(StoresContext);

export const useStore = <T extends keyof typeof stores>(store: T): typeof stores[T] => {
  const context = useContext(StoresContext)[store];

  if (context === undefined) {
    throw new Error('store must be used within Provider');
  }

  return context;
};

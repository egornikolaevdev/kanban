import { Dispatch, SetStateAction, createContext } from 'react';
import { IColumn } from '../../types/IColumn';

export type AppContextType = {
  columns: IColumn[];
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);

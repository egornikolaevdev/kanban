import { createContext } from 'react';
import { IColumn } from '../../types/IColumn';

export type AppContextType = {
  columns: IColumn[];
};

export const AppContext = createContext<AppContextType | null>(null);

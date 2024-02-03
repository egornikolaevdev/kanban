import {createContext, Dispatch, SetStateAction} from "react";

export type AppContextType = {
    currentPage: 'board' | 'backlog';
    setCurrentPage: Dispatch<SetStateAction<'board' | 'backlog'>>
}

export const AppContext = createContext<AppContextType | null>(null)
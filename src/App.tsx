import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Pages from './layouts/Pages';
import Header from './components/Header/Header';
import {AppContext} from "./store/utils/context.tsx";
import {useState} from "react";

function App() {
    const [currentPage, setCurrentPage] = useState<'board' | 'backlog'>('board')

    return (
    <>
      <Theme preset={presetGpnDefault}>
          <AppContext.Provider
              value={{currentPage, setCurrentPage}}
          >
        <Header />
        <Pages />
          </AppContext.Provider>
      </Theme>
    </>
  );
}

export default App;

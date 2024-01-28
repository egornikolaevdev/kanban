import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Pages from './layouts/Pages';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Theme preset={presetGpnDefault}>
        <Header />
        <Pages />
      </Theme>
    </>
  );
}

export default App;

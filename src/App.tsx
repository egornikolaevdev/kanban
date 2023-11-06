import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Pages from './layouts/Pages';

function App() {
  return (
    <>
      <Theme preset={presetGpnDefault}>
        <Pages />
      </Theme>
    </>
  );
}

export default App;

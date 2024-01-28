import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import { Provider } from 'react-redux';
import { setupStore } from './store/index.ts';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

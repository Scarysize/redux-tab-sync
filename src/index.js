import preact from 'preact';
import {Provider} from 'preact-redux';

import App from './components/App';

import createStore from './store';
import {createOnStorage} from './middleware';

const container = document.querySelector('.app');
const store = createStore();
const onStorage = createOnStorage(store);

// listen to local storage events for new actions
window.addEventListener('storage', onStorage);

preact.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  container
);

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import './commons/styles/base.scss';

import { store } from './store/store';
import * as serviceWorker from './serviceWorker';
import OnlyPizzaBurgerOrSushiApp from './components/MainApp/MainApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <OnlyPizzaBurgerOrSushiApp />
    </Provider>
  </React.StrictMode>,

  document.getElementById('only-pizza-burger-or-sushi-app')
);

serviceWorker.unregister();

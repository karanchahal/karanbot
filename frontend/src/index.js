import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import sendMessage from './actions/send-message'
import store from './store'

const react = () => {
    ReactDOM.render(<Provider> 
                        <App />
                    </Provider>, document.getElementById('root'));
    registerServiceWorker();
}

store.subscribe(render);
render();




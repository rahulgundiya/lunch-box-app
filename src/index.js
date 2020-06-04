import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore ,applyMiddleware,compose ,combineReducers} from 'redux'
import lunchBoxReducer from './store/reducers/lunchBoxReducers'
import ordersReducer from './store/reducers/ordersReducers'
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const rootReducer =combineReducers({
  lunchBoxReducers:lunchBoxReducer,
  ordersReducers:ordersReducer
})
const store = createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)))


const app =(
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

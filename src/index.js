import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux";
import reducers from './reducer/index';
import MineContainer from './container/mineContainer';
import  thunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><MineContainer /></Provider>, document.getElementById('root'));
 

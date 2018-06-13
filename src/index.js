import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calculator from './containers/calculator'; 
import './styles/styles.css';
import { Provider } from 'react-redux';
import inputReducer from './store/reducers/input';
import resultReducer from './store/reducers/result';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    input: inputReducer,
   // res: inputReducer
    result: resultReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)));




// class App extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <Calculator/>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}> 
        <div>
           <Calculator/>
        </div>
    </Provider>,  document.getElementById('root'));
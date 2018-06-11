import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/calculator'; 
import '../styles/styles.css';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Calculator/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
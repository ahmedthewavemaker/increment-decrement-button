import React, {Component} from 'react';
import Counter from './Counter';
import "./App.css"

class App extends Component {
    render() {
        return(
        <div className="App">
            <h2>Hello this is the wonderful counter app</h2>
            <Counter />

        </div>
        )
    }

}
export default App;


import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage/Home';

function App() {
    return (
        <div className="App">
           <Route path='/' component={HomePage} />
        </div>
    );
}

export default App;

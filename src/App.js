import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppContent from './component/AppContent';

function App() {

    return (
        <BrowserRouter>
            <AppContent/>
        </BrowserRouter>
    );
}

export default App;

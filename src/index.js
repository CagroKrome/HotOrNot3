import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Stats from './pages/Stats';
import About from './pages/About';

const container = document.getElementById('root');
const root = createRoot(container);

function App() {
    return (
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='stats' element={<Stats />} />
                        <Route path='about' element={<About />} />
                    </Routes>
                </Provider>
            </Router>
        </React.StrictMode>
    )
}

root.render(<App />)
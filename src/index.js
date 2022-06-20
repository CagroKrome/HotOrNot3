import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Stats from './pages/Stats';
import Add from './pages/Add';

const container = document.getElementById('root');
const root = createRoot(container);

console.log("%cMade by @ckdsgn_ with ❤️", "color:hsl(345, 60%, 70%); font-size: 30px");

function App() {
    return (
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <p className='signature'>Made by <a href='https://www.instagram.com/ckdsgn_/'>@ckdsgn_</a> with love</p>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='stats' element={<Stats />} />
                        <Route path='add' element={<Add />} />
                    </Routes>
                </Provider>
            </Router>
        </React.StrictMode>
    )
}

root.render(<App />)
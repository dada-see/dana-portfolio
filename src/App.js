import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Outlet, BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/main/Home';

export const DarkMode = React.createContext();

function App() {

    const [isDark, setIsDark] = useState(true);

    const Layout = () => {
        return (
            <div className='wrap'>
                <Header setIsDark={setIsDark} isDark={isDark}/>
                <Outlet />
                <Footer />
            </div>
        )
    }

    return (
        <DarkMode.Provider value={isDark}>
            <div className={`App ${isDark ? "" : "dark"}`}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path='/' element={<Home/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </DarkMode.Provider>
    );
}

export default App;

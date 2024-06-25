import { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './main/Home';

const AppContent = () => {
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
        <div className={`App ${isDark ? "" : "dark"}`}>
            <Routes>
                <Route>
                    <Route element={<Layout />}>
                        <Route path='/' element={<Home/>} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default AppContent;
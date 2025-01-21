import { Link, Outlet, Route, Routes } from 'react-router'
import MainNav from '../component/MainNav'
import Layout from "../layouts/Layout";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import ManagePage from '../pages/ManagePage';
import SettingPage from '../pages/SettingPage';

function AppRoutes() {
    return (
        <div>
            <Routes>
                {/* Pubblic */}
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>

                {/* Private */}
                {/* outlet show layout */}
                <Route path="admin" element={<Layout />}>
                    <Route index element={<Dashboard/>} />
                    <Route path="manage" element={<ManagePage/>} />
                    <Route path="setting" element={<SettingPage/>} />
                </Route>


            </Routes>
        </div>
    )
}

export default AppRoutes
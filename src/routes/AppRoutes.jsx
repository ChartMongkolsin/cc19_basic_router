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
import Recap from '../pages/Recap';
import RecapUserState from '../pages/RecapUserState';
import EasyZustand from '../pages/EasyZustand';
import Product from '../pages/Product';
import MyCart from '../pages/MyCart';

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
                    <Route path="recap" element={<Recap/>} />
                    <Route path="recapuserstate" element={<RecapUserState />} />
                    <Route path="zustand" element={<EasyZustand />} />
                    <Route path="product" element={<Product />} />
                    <Route path="mycart" element={<MyCart />} />

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
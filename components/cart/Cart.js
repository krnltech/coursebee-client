import React, { useState } from 'react';
import styles from "./Cart.module.css";
import classNames from "classnames";
import { BsBagFill } from 'react-icons/bs';

const Cart = () => {
    const [sidebar, setSidebar] = useState(false);
    const SidebarData = [
        {
            title: 'Home',
            path: '/',
            cName: 'nav-text'
        },
        {
            title: 'Reports',
            path: '/reports',
            cName: 'nav-text'
        },
        {
            title: 'Products',
            path: '/products',
            cName: 'nav-text'
        }
    ];
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='cartNav'>
                {/*<Link to='#' className='menu-bars'>*/}
                {/*    <FaIcons.FaBars onClick={showSidebar} />*/}
                {/*</Link>*/}
                <span onClick={showSidebar} >
                    <span className="cart-icon">
                        <BsBagFill/>
                    </span>
                    <span className="cart-text">
                        Cart
                    </span>
                </span>
            </div>
            <nav className={sidebar ? 'cartMenu active' : 'cartMenu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <span>X</span>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <a href="#">{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Cart;

import React from 'react';
import './CustomHeader.css'; // we’ll create this CSS file next
import logo from '../../src/assets/mylogisticimage.png'; // adjust path if needed

const CustomHeader = () => {
    return (
        <>
            <header className="header">
                <div className="header-left">
                    <img className="logo" src={logo} alt="My Logistix" />

                    <button className="toggle-btn">
                        <i className="material-icons left-double-arrow-icon">keyboard_double_arrow_left</i>
                    </button>

                    <div className="search-container">
                        <i className="material-icons-outlined search-icon">search</i>
                        <input type="text" placeholder="Search BY LRN/AWB no" />
                    </div>
                </div>

                <div className="header-right">
                    <button className="wallet-btn">
                        <i className="material-icons-outlined wallet-icon">account_balance_wallet</i>
                        <p>&#8377;</p>
                        <span>0.00</span>
                    </button>

                    <div className="notification">
                        <i className="material-icons-outlined notification-bell-icon">notifications</i>
                        <span className="count">2</span>
                    </div>

                    <div className="user-info">
                        <div className="welcome-text">Welcome Patel</div>
                        <div className="user-id">
                            MYLOGISTIX123
                            <i className="material-icons arrow-drop-down-icon">arrow_drop_down</i>
                        </div>
                    </div>
                </div>
            </header>
            <div className="back-header"></div>
        </>
    );
};

export default CustomHeader;

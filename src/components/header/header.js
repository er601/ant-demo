import React from 'react';
import { PageHeader, Divider } from 'antd'
import logo from '../../images/logo.png'
import './header.css'


const Header = () => {

    return (
        <>
            <img src={logo} width={40} height={40} alt="" />
            <PageHeader title="ICTLAB"  className="logo-tittle" />
            <Divider />
        </>
    );
};

export default Header;


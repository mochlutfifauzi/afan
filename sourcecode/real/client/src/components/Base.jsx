import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import Header from './pages/Header.jsx'


const Base = ({ children }) => (
    <div>

        <div class="wrapper">
            <div class="wrapper-inner">

<Header/>
        </div></div>

        <div class="content clearfix">

        {children}
        </div>
    </div>
);

Base.propTypes = {
    children: PropTypes.object.isRequired
};

export default Base;
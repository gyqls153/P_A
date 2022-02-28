
import React from 'react';

import '../App.css';
import '../index.css';
import '../assets/css/reset.css';
import '../assets/css/notice-main.css';

import PageHeader from "../Components/HeaderMenu";
import Navimenu from "../Components/Navigation";
import Footer from '../Components/Footer';

function Notice() {
    return(
        <div className="App">
            <div className="app-inner-grid">
                <PageHeader />
                <Navimenu />
                <Footer />
            </div>
        </div>     
    )
}
export default Notice;
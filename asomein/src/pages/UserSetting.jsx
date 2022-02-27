
import React from "react";

import '../App.css';
import PageHeader from "../Components/HeaderMenu";
import Userinfo from "../Components/InfoNavigation";
import Footer from "../Components/Footer";


function UserManagement(){
    return(
        <div className="App">
            <div className="app-inner-grid">    
                <PageHeader />
                <Userinfo />

                <Footer />
            </div>
        </div>
        

        
    )
}
export default UserManagement;
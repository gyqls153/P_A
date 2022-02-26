
import React from "react";
import { Fragment } from "react";
import PageHeader from "../Components/HeaderMenu";
import Userinfo from "../Components/InfoNavigation";

import Footer from "../Components/Footer";


function userManagement(){
    return(
        <>
            <PageHeader />
            <Userinfo />

            <Footer />
        </>
        

        
    )
}
export default userManagement;
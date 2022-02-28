import PageHeader from "../Components/HeaderMenu";
import Footer from "../Components/Footer";
import SubscribeMain from "../Components/SubscribeMain";

//월간구독 결제페이지
function Subscribemain(){
    return(
        <div className="App">
            <div className="app-inner-grid">    
                <PageHeader />
                
                <SubscribeMain />

                <Footer />
            </div>
        </div>
 
    )
}
export default Subscribemain;
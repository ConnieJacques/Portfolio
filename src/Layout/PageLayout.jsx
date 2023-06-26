import { Header } from '../components/Header';
import { Outlet } from "react-router-dom";
import { Background } from '../components/Background';
import { Footer } from '../components/Footer';


export function PageLayout(){
    return(
        <div>
            <Header />
            <Background />
                <Outlet/>
            <Footer />
        </div> 
    ); 
}
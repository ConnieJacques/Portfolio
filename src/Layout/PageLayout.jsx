import { Header } from '../components/Header';
// import { Background } from './components/Background';
import { Footer } from '../components/Footer';
import { Outlet } from "react-router-dom";


export function PageLayout(){
    return(
        <div>
            <Header />
                <Outlet/>
            <Footer />
        </div> 
    ); 
}
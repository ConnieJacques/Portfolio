import React from "react";
import { Navigate } from "react-router-dom";

export class HeaderNameWithRedirectToHomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }
    }

    changeRedirectStatus = () => {
        this.setState({redirect: true})
    }

    render(){
        return(
            <div className="flex flex-col justify-center pt-1">
                <button onClick={this.changeRedirectStatus} className="text-dark-green font-cursive-header text-3xl p-4 md:text-4xl md:p-6 lg:text-6xl lg:p-8 lg:pl-10 xl:text-2xl">
                    Connie Jacques
                </button>
                {this.state.redirect && <Navigate to="/" />}
            </div>
        )
    }
}
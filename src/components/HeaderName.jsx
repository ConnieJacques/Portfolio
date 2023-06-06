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
            <div>
                <button onClick={this.changeRedirectStatus}>
                    Connie Jacques
                </button>
                {this.state.redirect && <Navigate to="/" />}
            </div>
        )
    }
}
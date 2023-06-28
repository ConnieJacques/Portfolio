import React from "react";
import { Link } from "react-router-dom";

export function HeaderName() {

    return(
        <div className="flex flex-col justify-center pt-1">
            {/* <button onClick={this.changeRedirectStatus} className="text-dark-green font-cursive-header text-3xl p-4 md:text-4xl md:p-6 lg:text-6xl lg:p-8 lg:pl-10 xl:text-2xl">
                Connie Jacques
            </button>
            {this.state.redirect && <Navigate to="/" />} */}
            <button className="text-dark-green font-cursive-header text-3xl p-4 md:text-4xl md:p-6 lg:text-6xl lg:p-8 lg:pl-10 xl:text-2xl">
                <Link to="/" >
                Connie Jacques
                </Link>
            </button>
        </div>
    )
}
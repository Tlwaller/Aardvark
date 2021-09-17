import { Redirect } from "react-router-dom";

const Onboarding = () => {

    const isLoggedIn = false;
    //replace with real authentication

    return( isLoggedIn ? (
            <Redirect to="/"/>
        ) : (
            <div id="ob-container">
                <div id="ob-bg-shape"/>
            </div>
        )
    )
}

export default Onboarding;
import { Redirect } from "react-router-dom";

const Onboarding = () => {

    const isLoggedIn = true;
    //replace with real authentication

    return( isLoggedIn ? (
            <Redirect to="/"/>
        ) : (
            <h1>Onboarding</h1>
        )
    )
}

export default Onboarding;
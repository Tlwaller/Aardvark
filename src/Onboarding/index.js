import { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../LoginForm";
// import LoginPrompt from "../LoginPrompt";

const Onboarding = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    //replace with real authentication
    const [isLoggingIn, setLoggingIn] = useState(false);

    const renderLoginPrompt = () => {
        console.log('hit')
        if(isLoggingIn === true) {
            return(
                <div id='lf-outter'>
                    <div id='lf-inner'>
                        <h1 id='lf-exit-btn' onClick={() => setLoggingIn(!isLoggingIn)}>X</h1>
                        <LoginForm isLoggedIn={isLoggedIn}/>
                    </div>
                </div> 
            )
        } 
    }

    return( isLoggedIn ? (
            <Redirect to="/"/>
        ) : (
            <div id="ob-container">
                {/* replace bg with this later
                <div id="ob-bg-shape"/> */}
                <div id='ob-heading'>
                    <hgroup>
                        <h2>Nature's finest exterminator.</h2>
                        <h3>Get ready to squash your project's nastiest bugs with Aardvark.</h3>
                    </hgroup>
                    <button className="big-btn" onClick={() => setLoggingIn(!isLoggingIn)}>Get started</button>
                </div>
                {renderLoginPrompt()}
            </div>
        )
    )
}

export default Onboarding;
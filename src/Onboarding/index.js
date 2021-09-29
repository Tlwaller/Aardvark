import { Redirect } from "react-router-dom";

const Onboarding = () => {

    const isLoggedIn = false;
    //replace with real authentication

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
                    <button className="big-btn">Get started</button>
                </div>
            </div>
        )
    )
}

export default Onboarding;
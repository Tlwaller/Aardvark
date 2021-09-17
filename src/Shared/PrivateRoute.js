import { Redirect, Route } from "react-router";

const PrivateRoute = ({component: Component, ...rest}) => {

    const isLoggedIn = true;
        //replace with real authentication

    return (
        <Route
            {...rest}
            render = {props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/onboarding", state: { from: props.location } }} />
                )
            }
        />
    )

};

export default PrivateRoute;
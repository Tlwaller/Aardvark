import { Redirect, Route } from "react-router";

const PrivateRoute = ({component: Component, ...rest}) => {

    const isLoggedIn = false;
        //replace with real authentication

    return (
        <Route
            {...rest}
            render = {props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "welcome", state: { from: props.location } }} />
                )
            }
        />
    )

};

export default PrivateRoute;
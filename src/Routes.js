import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from './Home';
import Onboarding from './Onboarding';
import PrivateRoute from './Shared/PrivateRoute';

const Routes = () => {
return(
    <Router>
            <Switch>
                <Route path="/welcome" component={Onboarding} />
                <PrivateRoute exact path="/" component={Home} />
            </Switch>
        </Router>
    )
};

export default Routes;
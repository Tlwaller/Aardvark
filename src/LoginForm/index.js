import { Link } from "react-router-dom";

const LoginForm = (props) => {
    return(
        <form>
            <label className='lf-label'>
                Username
                <input className='lf-input'/>
            </label>
            <label className='lf-label'>
                Password
                <input className='lf-input'/>
            </label>
            <button id='lf-submit'>
                <Link to={props.isLoggedIn ? '/' : '/welcome'}>Login</Link>
            </button>
        </form>
    )
}

export default LoginForm;
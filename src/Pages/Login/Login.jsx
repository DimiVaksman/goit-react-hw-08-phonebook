

import { LoginForm } from 'components/LoginForm/loginForm';
import { Link } from 'react-router-dom';
export const Login = () => {
    return(
        <div>
                <Link to="/">
          <button>
            back
          </button>
        </Link>
            <h1>LOGIN</h1>
            <LoginForm />
            </div>
    )

}

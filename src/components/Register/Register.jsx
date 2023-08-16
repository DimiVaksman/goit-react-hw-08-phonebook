import { RegisterForm } from "components/RegisterForm/registerForm";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';


 export const Register = () => {
    return (
        
        <div>
                            <Link to="/">
          <button>
            back
          </button>
        </Link>
            <RegisterForm />
        </div>
    )
}
import React,{useContext} from 'react'
import { Link,useHistory } from 'react-router-dom'
import {UserContext} from '../App'
const Navbar = () => {
    const history = useHistory()
    const { state, dispatch } = useContext(UserContext)
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/createpost">CreatePost</Link></li>,
                <li><Link
                    onClick={() => {
                        localStorage.clear()
                        dispatch({ type: "CLEAR" })
                        history.push('/signin')
                        } 
                    }
                >Chiqish</Link>
                </li>
            ]
        } else {
            return [
                <li><Link to="/signin">Login</Link></li>,
                <li><Link to="/signup">SignUp</Link></li>
            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper #00e676 green accent-3">
                <Link to={state ? "/" :"/signin"} className="brand-logo left">logo</Link>
            <ul id="nav-mobile" className="right">
                {renderList()}
            </ul>
            </div>
        </nav>
     )
}
 export default Navbar
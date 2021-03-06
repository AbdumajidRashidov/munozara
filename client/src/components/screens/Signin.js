import React,{useState,useContext} from 'react';
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css';
import {UserContext} from '../../App';
const Signin = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Kechirasiz, tarmoqda bunday email yo'q!", classes: "#ff5252 red accent-3" })
        }
        else {
            fetch("/signin", {
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    password,
                    email
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                     dispatch({ type: "USER", payload: data.user })
                    if (data.error) {
                        M.toast({html: data.error, classes:"#ff5252 red accent-3"})
                    } else {
                        localStorage.setItem("jwt", data.token);
                        localStorage.setItem("user", JSON.stringify(data.user))
                       
                        history.push('/')
                        M.toast({ html: `Xush kelibsiz ${data.user.name} !`, classes: "#ff5252 indigo accent-3" })
                        
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
    }
    return (
        <div>
            <div className="card login-card">
                <h2>logo</h2>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    id="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                    className="btn #00e676 green accent-3 waves-effect waves-light"
                    onClick={()=> PostData()}
                >Login</button>
                <h6><Link to="/signup">Don't have an accaunt?</Link></h6>
            </div>
            
        </div>
    )
}
 export default Signin
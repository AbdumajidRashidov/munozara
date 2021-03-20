import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
const SingUp = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Kechirasiz, tarmoqda bunday email yo'q!", classes: "#ff5252 red accent-3" })
        }
        else {
            fetch("/signup", {
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    name,
                    password,
                    email
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        M.toast({html: data.error, classes:"#ff5252 red accent-3"})
                    } else {
                        M.toast({ html: data.message, classes: "#ff5252 indigo accent-3" })
                        history.push('/signin')
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
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
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
                >SingUp</button>
                <h6><Link to="/signin">Alredy have an accaunt?</Link></h6>
            </div>
        </div>
    )
}
 export default SingUp
import React from 'react';

const Profile = () => {
    return (
        <div style={{maxWidth:"600px",margin:"10px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "40px 0px",
                padding:"20px",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 7px 10px -3px"
            }}>
                <div>
                    <img alt="ava" style={{ width:"160px", height:"160px", borderRadius:"50%",margin:"0 0 30px 0" }}
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    />
                </div>
                <div>
                    <h4>Abdumajid Rashidov</h4>
                    <div style={{ display: "flex", opacity:"0.7", justifyContent:"space-between"}}>
                        <h5 style={{margin:"0 5px"}}>40 posts</h5>
                        <h5 style={{margin:"0 5px"}}>40 followers</h5>
                        <h5 style={{margin:"0 5px"}}>40 following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" alt="myimg" src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" alt="myimg" src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" alt="myimg" src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" alt="myimg" src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" alt="myimg" src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" alt="myimg" src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" alt="myimg" src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                 <img className="item" alt="myimg" src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            </div>
        </div>
    )
}
 export default Profile
import React, { useState,useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/allposts', {
            headers: {
                "Authorization":"Muhammad "+localStorage.getItem('jwt')
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                 setData(result.posts)
            }).catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div className="home">
            
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <h5>{ item.postedBy.name }</h5>
                            <div className="card-image">
                                <img alt="img" src={item.photo} />
                            </div>
                            <div className="card-content">
                                <i className="material-icons" style={{color:"red"}}>favorite</i>
                                <h6>{item.title}</h6>
                                <p>{ item.body }</p>
                                <input type="text" placeholder="write something comment"></input>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        
    )
}
 export default Home
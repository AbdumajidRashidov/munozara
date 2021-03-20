
import React,{useEffect,createContext, useReducer,useContext} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, useHistory, Switch } from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import SingUp from './components/screens/Singup'
import Profile from './components/screens/profile'
import CreatePost from './components/screens/CreatePost'
import { reducer, initialState } from './reducers/userReducer'



export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch}= useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      history.push('/')
    } else {
      history.push('/signin')
    }
  },[])
  return (
    <Switch>
      <Route path="/" exact>
          <Home></Home>
      </Route>
      <Route path="/signin">
        <Signin></Signin>
      </Route>
      <Route path="/signup">
        <SingUp></SingUp>
      </Route>
      <Route path="/profile">
        <Profile></Profile>
      </Route>
      <Route path="/createpost">
        <CreatePost></CreatePost>
      </Route>
    </Switch>
  )
}


function App() {
  const [ state, dispatch ] = useReducer( reducer, initialState )
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

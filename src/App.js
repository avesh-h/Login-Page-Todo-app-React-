import React,{useState,useEffect} from 'react'
import './App.css';
import Form from './components/Form/My-form';
import Header from './components/Header/header';
import Home from './components/Home/My-Home';


function App() {
  const [isLoggedin,setLoggedIn] = useState(false)

  useEffect(()=>{
    const saveLogInUser = localStorage.getItem('isLoggedin')
    if(saveLogInUser === '1'){
      setLoggedIn(true)
    }
  },[])

  const loginHandler = (email,password) =>{
    localStorage.setItem('isLoggedin','1')
    setLoggedIn(true)
  }
  const logoutHandler = () =>{
    localStorage.removeItem('isLoggedin')
    setLoggedIn(false)
  }

  return (
    <div className="App">
      <Header isAuthenticated = {isLoggedin} onLogout = {logoutHandler}/>
      {!isLoggedin &&  <Form ongetData = {loginHandler}/>}
      {isLoggedin && <Home  />}
    </div>
  );
}

export default App;

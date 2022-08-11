import React from 'react'
import '../Header/header.css'
import Navigation from './Navigation'


function Header(props) {
  return (
    <header>
      <h1>My-app</h1>
      <Navigation isLoggedin= {props.isAuthenticated} onLogout= {props.onLogout}/>
    </header>
  )
}

export default Header

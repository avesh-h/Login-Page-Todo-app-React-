import React from 'react'
import '../Header/Navigation.css'

function Navigation(props) {

    // const logoutHandler = () =>{
        
    // }
  return (
    <React.Fragment>
      <ul className='navigation'>
        {props.isLoggedin && 
        (
        <li>
            User
        </li>
        )
        }

        {props.isLoggedin && 
        (
        <li>
            Admin
        </li>
        )
        }
        
        {props.isLoggedin &&
        (
        <li>
            <button onClick={props.onLogout}>
                Log Out
            </button>
        </li>
        )
        }
      </ul>
    </React.Fragment>
  )
}

export default Navigation

import React,{useState,Fragment ,useEffect} from 'react'
import '../Form/My-form.css'

function Form(props) {
    const [email,setEmail] = useState('')
    const [Validemail,setValidEmail]=useState()
    const [password,setPassword] = useState('')
    const [ValidPassword,setValidPassword]=useState()
    const [FormisValid,setFormisValid] = useState(false)

    useEffect(()=>{
        setFormisValid(email.includes('@') && password.trim().length > 6)
    },[email,password])
  
    // Take-user-input js
    const EmailHandler = (e) =>{
      setEmail(e.target.value)
      
    }  
    const PasswordHandler = (e) =>{
      setPassword(e.target.value)
    }
    // Validation-js
    const ValidateEmailHandler=()=>{
        setValidEmail(email.includes('@'))
    }
    const ValidatePassHandler=()=>{
        setValidPassword(password.trim().length > 6)
    }
    // Submit form js
    const SubmitHandler = (e)=>{
      e.preventDefault();
  
        props.ongetData(email,password)

        setEmail('')
        setPassword('')
    } 
    // Show-Password js
    const input_pass = document.querySelector('.input_pass')
    let value = true;
  
    const Show_Password = () => {
      if(value === true){
          input_pass.setAttribute('type','text')
          value = false;
      }
      else{
          input_pass.setAttribute('type','password')
           value = true;
      }
  }

  return (
    <Fragment>
        <form onSubmit={SubmitHandler} className="form">
            <div className='input'>
                <label>Enter email:</label>
                <input type="text"
                    value={email} 
                    onChange={EmailHandler}
                    onBlur ={ValidateEmailHandler}
                    className = {`email-input  ${
                        Validemail === false ? 'invalid' : ''
                    }`}
                    />
            </div> 
            <div className='input'>
                <label>Password:</label>
                <input 
                    value={password} type="password"
                    onChange={PasswordHandler}
                    onBlur ={ValidatePassHandler}
                    className = {`input_pass ${
                        ValidPassword === false ? 'invalid' : ''
                    }`}
                    />
            </div>
            <div className='input'>
                <label htmlFor="vehicle1"> Show Password</label>
                <input type="checkbox"
                    id="show_pass"
                    name="vehicle1"
                    value="Bike"
                    onClick={Show_Password} 
                    className = 'pass-input'
                    />
            </div>
            <button type='submit'
            disabled = {!FormisValid}
            className = 'log-in-btn'
            >Log in</button>
      </form>
    </Fragment>
  )
}

export default Form

import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react'
import {useHistory } from 'react-router-dom';
import CartContext from '../Store/Cart-Context';
import classes from "./Login.module.css"

function Login() {
    const history= useHistory();
let emailInputRef=useRef('');
let passwordInputRef=useRef('');

const loginCtx=useContext(CartContext)

const submitHandler=(e)=>{
    e.preventDefault();

    

    const enteredEmail= emailInputRef.current.value;
    const enteredPassword= passwordInputRef.current.value;
    // console.log(enteredEmail,enteredPassword)

    fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCXzhbX-HRm-ujGbrRU7-ynAlPT4t8HTY",{
        method:"POST",   
        body: JSON.stringify({
             email: enteredEmail,
             password: enteredPassword,
             returnSecureToken: true,
         }),
         headers: {
            "Content-Type":"application/json"
         }
    }).then((res)=>{
          if(res.ok){
            return res.json();
        } else {
            return res.json().then((data)=>{
                let errorMessage="Entered wrong details"
                throw new Error(errorMessage)
            })
        }
    }).then((data)=>{
        console.log(data.idToken)
        console.log(loginCtx)
        loginCtx.login(data.idToken)
        
        history.replace('/store')
    })
    .catch((err)=>{
        alert(err.message)
    })
}
// const submitHandler=async (e)=>{
//     e.preventDefault();

//     const enteredEmail= emailInputRef.current.value;
//     const enteredPassword= passwordInputRef.current.value;
//     // console.log(enteredEmail,enteredPassword)
// try{
//     const response= await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCXzhbX-HRm-ujGbrRU7-ynAlPT4t8HTY",{
//         method:"POST",   
//         body: JSON.stringify({
//              email: enteredEmail,
//              password: enteredPassword,
//              returnSecureToken: true,
//          }),
//          headers: {
//             "Content-Type":"application/json"
//          }
//     })

//     const data= await response.json()
// }
//     then((res)=>{
//         if(res.ok){
//             return res.json();
//         } else {
//             return res.json().then((data)=>{
//                 let errorMessage="Entered wrong details"
//                 throw new Error(errorMessage)
//             })
//         }
//     }).then((data)=>{
//         history.replace('/store')
//     })
//     .catch((err)=>{
//         alert(err.message)
//     })
// }

  return (
    <>
   
    <section className={classes.auth}>
    <div className={classes.wrapper}>
      <form onSubmit={submitHandler} className={classes.form}>
      <div><h2>Login</h2></div>
       <div className={classes.control}>
        <label>Email</label>
        <input type="text" ref={emailInputRef} placeholder="test@gmail.com"/>
        </div>
        <br/>
        <div className={classes.control}>
        <label>Password</label>
        <input type="text" ref={passwordInputRef} placeholder="222222"/>
        </div>
        <br/>
        <div className={classes.actions}>
        <button>Login</button>
        </div>
      </form>
    </div>
    </section>
    </>
  )
}

export default Login

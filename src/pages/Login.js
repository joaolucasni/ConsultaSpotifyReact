import React, {useState} from 'react';
import '../styles/Login.css';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../services/connectionFirebase";

export const Login = () => {
        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");

        const signIn = (e) => {
            e.preventDefault();
           signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
        }

        const signUp = (e) => {
            e.preventDefault();
           createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
        }
  return (
    <div className='Body'>
    <div className='wrapper'> 
        <form>
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Email' value={Email} required onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' value={Password} required onChange={(event) => setPassword(event.target.value)}/>
            </div>

            <button className= "button" type='submit' onClick={signIn}>Login</button>
            <button className = "button" type='submit' onClick={signUp}>Register</button>
        </form>
    </div>
    </div>
  )
}



export default Login
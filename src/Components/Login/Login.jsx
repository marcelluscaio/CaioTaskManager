import "./login.css";
import { useState } from "react";



function Login() {
   const [hasAccount, setHasAccount] = useState(true);

   function updateHasAccount(){
      setHasAccount(!hasAccount);
   }


   return (
    <div>
      <button className="login-toggle" onClick={updateHasAccount}>{hasAccount ? "I don't have an account" : "I already have an account" }</button>
      <div className={`form-container ${hasAccount ? 'login' : 'sign-up'}`}>
         <form className="form form--login">
            <h2>Login</h2>
            <div>
               <label>E-mail:</label>
               <input type="email" />
            </div>
            <div>
               <label>Password:</label>
               <input type="password" />
            </div>
         </form>
         <form className="form">
            <h2>Create account</h2>
            <div>
               <label>E-mail:</label>
               <input type="email" />
            </div>
            <div>
               <label>Password:</label>
               <input type="password" />
            </div>
         </form>
      </div>
    </div>
  )
}

export default Login;
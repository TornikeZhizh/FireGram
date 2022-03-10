import React, { useState } from "react";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";

function Login({ user, setUser }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (e) => {
    try {
      e.preventDefault();
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (e) {
      console.log(e);
    }
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoginEmail("");
      setLoginPassword("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {!user && (
        <div className="container">
          <div className="login-form ">
            <h2>Login </h2>
            <form onSubmit={login}>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => setLoginEmail(e.target.value)}
                value={loginEmail}
              />
              <input
                placeholder="Password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button>Login</button>
            </form>
          </div>

          <div className="vertical-line "></div>

          <div className="register-form">
            <h2>Register </h2>
            <form onSubmit={register}>
              <input
                placeholder="Email"
                type="email"
                onChange={(e) => setRegisterEmail(e.target.value)}
                value={registerEmail}
              />
              <input
                placeholder="Password"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <button>Register</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

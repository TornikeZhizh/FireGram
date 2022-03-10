import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function LoginInfo({ user }) {
  return (
    <div className="login-info">
      <span>Hello , {user?.email}</span>
      <button
        onClick={async () => {
          await signOut(auth);
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default LoginInfo;

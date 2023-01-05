import React from "react";
import styles from "./Signup.module.css";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const { signup, error, isPending } = useSignup();

  const handlesubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <div className={styles["main-form"]}>
      <form onSubmit={handlesubmit} className={styles["signup-form"]}>
        <h2>Join to post your review.</h2>
        <label>
          <span>Enter Name:</span>
          <input
            type="text"
            onChange={(e) => setdisplayName(e.target.value)}
            value={displayName}
            required
          />
        </label>
        <label>
          <span>Email address:</span>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            required
          />
        </label>
        {!isPending &&<button className={styles["button"]}>
          Signup</button>}
      
         {isPending && <button className='btn'disabled>Loading</button>}
        {error && <p>{error}</p>}

        <p>
          Already a member? <Link to="/login" className={styles.member}>Login</Link>
        </p>
       
      </form>
    </div>
  );
}

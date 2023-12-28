import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../features/signSlice";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const token = useSelector((state) => state.token.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetLogin = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSingUp = (e) => {
    e.preventDefault();
    dispatch(
      authSignIn({
        email,
        password,
      })
    );
  };

  if (token) {
  	navigate("/");
    }
  return (
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form onSubmit={handleSingUp} action="#">
          <h1 className="title">Sign in</h1>

          <input
            value={email}
            onChange={handleSetLogin}
            type="text"
            placeholder="Login"
          />
          <input
            value={password}
            onChange={handleSetPassword}
            type="password"
            placeholder="Password"
          />
          <button
            onClick={() => setBtn(!btn)}
            type="submit"
            className="h1_Title"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

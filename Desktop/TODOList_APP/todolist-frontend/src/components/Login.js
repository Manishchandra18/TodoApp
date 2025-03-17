import { useState } from "react";
import { loginUser } from "../api";

const Login = ({ setToken }) => {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ user_id, password });
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
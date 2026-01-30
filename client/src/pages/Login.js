import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    nav("/dashboard");
  };

  return (
    <div className="center">
      <form className="card" onSubmit={submit}>
        <h2>Login</h2>
        <input className="input" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button className="btn">Login</button>

        <p style={{ textAlign:"center", marginTop:10 }}>
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}

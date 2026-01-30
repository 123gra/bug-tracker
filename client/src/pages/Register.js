import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", { name, email, password });
    nav("/login");
  };

  return (
    <div className="center">
      <form className="card" onSubmit={submit}>
        <h2>Register</h2>
        <input className="input" placeholder="Name" onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button className="btn">Create</button>
      </form>
    </div>
  );
}

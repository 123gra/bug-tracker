import { useState } from "react";
import api from "../api";

export default function TicketForm({ refresh, projectId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/tickets", {
      title,
      description,
      project: projectId
    });
    setTitle("");
    setDescription("");
    refresh();   // <-- NOW WORKS
  };

  return (
    <form onSubmit={submit}>
      <input className="input" placeholder="Bug title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input className="input" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <button className="btn">Add</button>
    </form>
  );
}

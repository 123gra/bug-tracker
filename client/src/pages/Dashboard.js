import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data));
  }, []);

  const create = async () => {
    await api.post("/projects", { name });
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  return (
    <div className="page">
      <h2>Projects</h2>
      <input className="input" placeholder="Project name" onChange={e=>setName(e.target.value)} />
      <button className="btn" onClick={create}>Add</button>

      <div className="project-grid">
        {projects.map(p => (
          <div key={p._id} className="project-card" onClick={()=>nav(`/board/${p._id}`)}>
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}

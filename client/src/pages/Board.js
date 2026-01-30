import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import TicketForm from "../components/TicketForm";

export default function Board() {
  const { id } = useParams();   // <-- THIS WAS MISSING
  const [tickets, setTickets] = useState([]);

  const loadTickets = async () => {
    const res = await api.get(`/tickets/${id}`);
    setTickets(res.data);
  };

  useEffect(() => {
    loadTickets();
  }, []);

  const columns = ["TODO", "IN_PROGRESS", "DONE"];

  return (
    <div className="page">
      <h1>Project Board</h1>

      <TicketForm refresh={loadTickets} projectId={id} />

      <div className="board">
        {columns.map(col => (
          <div key={col} className="column">
            <h3>{col}</h3>
            {tickets.filter(t => t.status === col).map(t => (
              <div key={t._id} className="ticket">
                <b>{t.title}</b>
                <p>{t.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

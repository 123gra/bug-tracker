import api from "../api";

export default function Column({status,tickets,refresh}) {
  const drop = async e => {
    const id = e.dataTransfer.getData("id");
    await api.patch(`/tickets/${id}`,{status});
    refresh();
  };

  return (
    <div onDragOver={e=>e.preventDefault()} onDrop={drop} className="column">
      <h3>{status}</h3>
      {tickets.map(t=>(
        <div key={t._id}
             draggable
             onDragStart={e=>e.dataTransfer.setData("id",t._id)}
             className="ticket">
          <b>{t.title}</b>
          <p>{t.description}</p>
        </div>
      ))}
    </div>
  );
}

const SamuraiList = ({ samurais, onDelete }) => {
  return (
    <ul className="samurai-list">
      {samurais.map((samurai) => (
        <li className="samurai-card" key={samurai.id}>
          <div className="samurai-info">
            <span className="samurai-name">{samurai.name}</span>
            <span className="samurai-meta">
              {samurai.clan} clan — {samurai.weapon}
            </span>
          </div>
          <button onClick={() => onDelete(samurai.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default SamuraiList;

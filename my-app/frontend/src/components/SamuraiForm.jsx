import { useState } from "react";

const SamuraiForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [clan, setClan] = useState("");
  const [weapon, setWeapon] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name, clan, weapon });
    setName("");
    setClan("");
    setWeapon("");
  };

  return (
    <form className="samurai-form" onSubmit={handleSubmit}>
      <div className="samurai-form-row">
        <label>name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="samurai-form-row">
        <label>clan</label>
        <input value={clan} onChange={(event) => setClan(event.target.value)} />
      </div>
      <div className="samurai-form-row">
        <label>weapon</label>
        <input
          value={weapon}
          onChange={(event) => setWeapon(event.target.value)}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default SamuraiForm;

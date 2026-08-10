import { useState, useEffect } from "react";
import samuraiService from "./services/samurais";
import SamuraiForm from "./components/SamuraiForm";
import SamuraiList from "./components/SamuraiList";

const App = () => {
  const [samurais, setSamurais] = useState([]);

  useEffect(() => {
    samuraiService.getAll().then((data) => setSamurais(data));
  }, []);

  const addSamurai = (newSamurai) => {
    samuraiService.create(newSamurai).then((created) => {
      setSamurais(samurais.concat(created));
    });
  };

  const deleteSamurai = (id) => {
    samuraiService.remove(id).then(() => {
      setSamurais(samurais.filter((samurai) => samurai.id !== id));
    });
  };

  return (
    <div className="app">
      <h1 className="app-title">侍 Samurai Directory</h1>
      <p className="app-subtitle">A record of honored warriors</p>
      <h2 className="section-title">Add a new samurai</h2>
      <SamuraiForm onAdd={addSamurai} />
      <h2 className="section-title">Samurais</h2>
      <SamuraiList samurais={samurais} onDelete={deleteSamurai} />
    </div>
  );
};

export default App;

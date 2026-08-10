let initialSamurais = [
  {
    id: 1,
    name: "Miyamoto Musashi",
    clan: "Ronin",
    weapon: "Nitoryu (dual swords)",
  },
  { id: 2, name: "Date Masamune", clan: "Date", weapon: "Katana" },
  { id: 3, name: "Tomoe Gozen", clan: "Minamoto", weapon: "Naginata" },
];

let samurais = [...initialSamurais];

const getAll = () => samurais;

const getById = (id) => samurais.find((samurai) => samurai.id === id);

const create = (samurai) => {
  const newSamurai = {
    id: samurais.length > 0 ? Math.max(...samurais.map((s) => s.id)) + 1 : 1,
    ...samurai,
  };
  samurais = [...samurais, newSamurai];
  return newSamurai;
};

const remove = (id) => {
  samurais = samurais.filter((samurai) => samurai.id !== id);
};

const update = (id, updatedSamurai) => {
  samurais = samurais.map((samurai) =>
    samurai.id === id ? { ...samurai, ...updatedSamurai } : samurai,
  );
  return getById(id);
};

const resetToInitial = () => {
  samurais = [...initialSamurais];
};

export default { getAll, getById, create, remove, update, resetToInitial };

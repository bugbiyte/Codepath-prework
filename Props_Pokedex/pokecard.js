function Pokecard({ id, name, type, base_experience }) {
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="name">{name}</div>
      <div className="meta">Type: {type}</div>
      <div className="meta">EXP: {base_experience}</div>
    </div>
  );
}

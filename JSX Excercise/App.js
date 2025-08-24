function App ()
{
	const spacePhenomena = [
		{id: 1, name: "Asteroid Belt", emoji: "☄️"},
		{id: 2, name: "Galactic Nebula", emoji: "🌌"},
		{id: 3, name: "Black Hole", emoji: "🕳️"},
		{id: 4, name: "Supernova Explosion", emoji: "💥"},
		{id: 5, name: "Pulsar", emoji: "⚡"},
		{id: 6, name: "Quasar", emoji: "💫"},
		{id: 7, name: "Exoplanet", emoji: "🪐"},
		{id: 8, name: "Interstellar Cloud", emoji: "☁️"},
		{id: 9, name: "Gamma-Ray Burst", emoji: "🌠"},
		{id: 10, name: "Magnetic Field Reversal", emoji: "🧲"}
	];

	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];


// - Render each space phenomenon with its emoji and name alongside the observation status, which you will randomly determine.


// - For each phenomenon with `Prime for Study` observation status, excite the explorers with a message using conditional rendering, emphasizing to bring their advanced equipment.


	return (
		<div>
			{spacePhenomena.map(phenomenon => {
				const randomStatus = observationStatuses[Math.floor(Math.random() * observationStatuses.length)];
				return (
					<div key={phenomenon.id}>
						<span>{phenomenon.emoji} {phenomenon.name} - {randomStatus}</span>
						{randomStatus === "🚀 Prime for Study" && <p>🔧 Don't forget to bring your advanced equipment!</p>}
					</div>
				);
			})}	
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

// src/components/MissionFilter.jsx
const STATUSES = ["All", "Planned", "Active", "Completed"];

export default function MissionFilter({ value, onChange }) {
  return (
    <div className="filter">
      <label className="filter-label">Status</label>
      <select
        className="filter-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}

// src/components/MissionAction.jsx
const NEXT_ACTIONS = {
  Planned: [{ label: "Activate", next: "Active" }],
  Active: [
    { label: "Complete", next: "Completed" },
    { label: "Reset to Planned", next: "Planned", variant: "secondary" }
  ],
  Completed: [{ label: "Reset to Planned", next: "Planned", variant: "secondary" }],
};

export default function MissionAction({ status, onUpdateStatus }) {
  const actions = NEXT_ACTIONS[status] || [];
  return (
    <div className="actions">
      {actions.map((a) => (
        <button
          key={a.label}
          className={a.variant === "secondary" ? "btn btn-secondary" : "btn"}
          onClick={() => onUpdateStatus(a.next)}
        >
          {a.label}
        </button>
      ))}
    </div>
  );
}

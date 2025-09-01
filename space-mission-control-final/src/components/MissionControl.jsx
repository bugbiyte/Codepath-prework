// src/components/MissionControl.jsx
import { useMemo, useState } from "react";
import MissionCard from "./MissionCard.jsx";
import MissionAction from "./MissionAction.jsx";
import MissionFilter from "./MissionFilter.jsx";

const ALL = "All";

export default function MissionControl({ missions: initialMissions = [] }) {
  // Parent state (source of truth)
  const [missions, setMissions] = useState(initialMissions);
  const [statusFilter, setStatusFilter] = useState(ALL);

  // Derived list according to filter
  const filteredMissions = useMemo(() => {
    if (statusFilter === ALL) return missions;
    return missions.filter((m) => m.status === statusFilter);
  }, [missions, statusFilter]);

  // Child → Parent: update mission status
  function updateMissionStatus(id, nextStatus) {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: nextStatus } : m))
    );
  }

  return (
    <div className="mc">
      <h1>Space Mission Control</h1>

      <div className="toolbar">
        <MissionFilter value={statusFilter} onChange={setStatusFilter} />
      </div>

      <div className="grid">
        {filteredMissions.map((m) => (
          <MissionCard key={m.id} name={m.name} status={m.status} crew={m.crew}>
            <MissionAction
              status={m.status}
              onUpdateStatus={(next) => updateMissionStatus(m.id, next)}
            />
          </MissionCard>
        ))}

        {filteredMissions.length === 0 && (
          <div className="empty">No missions for this status.</div>
        )}
      </div>
    </div>
  );
}

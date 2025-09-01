// src/components/MissionCard.jsx
import styles from "./MissionCard.module.css";

/**
 * MissionCard (presentational)
 * Props: name (string), status (string), crew (array of strings)
 * Children: optional (e.g., action buttons)
 */
export default function MissionCard({ name, status, crew, children }) {
  const crewText = Array.isArray(crew) ? crew.join(", ") : "—";
  const badgeClass = styles[`badge_${String(status || "").toLowerCase()}`] || styles.badge;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{name}</h2>
        <span className={`${styles.badge} ${badgeClass}`}>{status}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.detail}><strong>Status:</strong> {status}</p>
        <p className={styles.detail}><strong>Crew:</strong> {crewText}</p>
      </div>

      {children && <div className={styles.actions}>{children}</div>}
    </div>
  );
}

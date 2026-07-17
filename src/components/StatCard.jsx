export default function StatCard({ title, value, icon, variant }) {
  return (
    <div className={`stat-card ${variant}`}>
      <div className="icon-wrapper">{icon}</div>
      <div className="card">
        {title} <span>{value}</span>
      </div>
    </div>
  );
}

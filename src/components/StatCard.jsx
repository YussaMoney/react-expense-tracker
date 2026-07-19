export default function StatCard({ title, value, icon, variant }) {
  return (
    <div className={`stat-card ${variant}`}>
      <div className="icon-wrapper">{icon}</div>
      <div className="card">
        <p className="card-title">{title}</p>

        <h3 className="card-value">{value}</h3>
      </div>
    </div>
  );
}

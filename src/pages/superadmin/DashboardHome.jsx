export default function DashboardHome() {
  return (
    <div>
      <h1>Super Admin Dashboard</h1>
      <p>Welcome, Super Admin 👋</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={cardStyle}>Total Users: 25</div>
        <div style={cardStyle}>Total Tickets: 120</div>
        <div style={cardStyle}>Open Tickets: 15</div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>System Overview</h3>
        <div style={chartStyle}>📊 Chart Placeholder</div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  background: "#1f2937",
  color: "white",
  borderRadius: "8px",
};

const chartStyle = {
  height: "200px",
  background: "#e5e7eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
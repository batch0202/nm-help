export default function DashboardHome() {
  return (
    <div>
      <h1>Agent Dashboard</h1>
      <p>Welcome, Agent 👋</p>

      <div style={{ marginTop: "20px" }}>
        <p>Assigned Tickets: 5</p>
        <p>Resolved Tickets: 3</p>
        <p>Pending Tickets: 2</p>
      </div>
    </div>
  );
}
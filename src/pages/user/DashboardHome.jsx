export default function DashboardHome() {
  return (
    <div className="dashboard">
      
      <h1>User Dashboard</h1>

      <div className="cards">
        <div className="card">Total Tickets: 12</div>
        <div className="card">Open Tickets: 5</div>
        <div className="card">Closed Tickets: 7</div>
      </div>

      <div className="charts">
        <div className="chart-box">Line Chart (UI only)</div>
        <div className="chart-box">Pie Chart (UI only)</div>
        <div className="chart-box">Bar Chart (UI only)</div>
      </div>

    </div>
  );
}
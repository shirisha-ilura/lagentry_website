import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const stats = [
    {
      id: 'active-agents',
      label: 'Active Agents',
      value: '247',
      description: 'Currently running',
      change: '+12%'
    },
    {
      id: 'interactions',
      label: 'Total Interactions',
      value: '12.5K',
      description: 'This week',
      change: '+28%'
    },
    {
      id: 'tasks-completed',
      label: 'Tasks Completed',
      value: '8.4K',
      description: 'Total',
      change: '+15%'
    },
    {
      id: 'success-rate',
      label: 'Success Rate',
      value: '94%',
      description: 'Average',
      change: '+5%'
    }
  ];

  return (
    <div className="dashboard-section">
      <div className="dashboard-container">
        {/* Dashboard Content Section */}
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h2 className="dashboard-title">Agent Analytics Dashboard</h2>
            <p className="dashboard-subtitle">
              Real-time insights into your AI agent ecosystem
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className="stat-card-header">
                  <span className="stat-label">{stat.label}</span>
                  <div className="stat-icon">📊</div>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-description">{stat.description}</div>
                <div className="stat-change positive">
                  <span className="trend-icon">↑</span>
                  <span>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder Graphs */}
          <div className="dashboard-graphs">
            <div className="graph-card">
              <h3 className="graph-title">Agent Activity</h3>
              <div className="graph-placeholder">
                <div className="graph-bar" style={{height: '60%'}}></div>
                <div className="graph-bar" style={{height: '80%'}}></div>
                <div className="graph-bar" style={{height: '45%'}}></div>
                <div className="graph-bar" style={{height: '90%'}}></div>
                <div className="graph-bar" style={{height: '70%'}}></div>
                <div className="graph-bar" style={{height: '85%'}}></div>
                <div className="graph-bar" style={{height: '55%'}}></div>
                <div className="graph-bar" style={{height: '75%'}}></div>
              </div>
            </div>

            <div className="graph-card">
              <h3 className="graph-title">Performance Metrics</h3>
              <div className="metrics-grid">
                <div className="metric-item">
                  <div className="metric-bar" style={{width: '85%'}}></div>
                  <span className="metric-label">Response Time</span>
                </div>
                <div className="metric-item">
                  <div className="metric-bar" style={{width: '92%'}}></div>
                  <span className="metric-label">Accuracy</span>
                </div>
                <div className="metric-item">
                  <div className="metric-bar" style={{width: '78%'}}></div>
                  <span className="metric-label">Efficiency</span>
                </div>
                <div className="metric-item">
                  <div className="metric-bar" style={{width: '90%'}}></div>
                  <span className="metric-label">Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


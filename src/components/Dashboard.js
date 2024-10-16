import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import './Dashboard.css'; // Add this for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chart-container">
        <h2>Sales Data</h2>
        <BarChart />
      </div>
      <div className="chart-container">
        <h2>Revenue Data</h2>
        <LineChart />
      </div>
      <div className="chart-container">
        <h2>Product Distribution</h2>
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;

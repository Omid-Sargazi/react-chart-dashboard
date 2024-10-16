import React from 'react';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <h1>Interactive Dashboard</h1>
        <Dashboard />
      </ErrorBoundary>
    </div>
  );
}

export default App;

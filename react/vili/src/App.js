import './App.css';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Sidebar />
      <Dashboard />
      <Panel />
    </div>
  );
}

export default App;

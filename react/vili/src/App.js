import './App.css';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>  
      <div>
        <Routes>
          <Route path='/' element={<><Sidebar /><Dashboard /><Panel /></>}/>
          <Route path='/test' element={<Navbar />}/>
        </Routes>
      </div>
    </Router>            
  );
}

export default App;

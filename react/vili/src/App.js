import './App.css';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Dashboard from './components/Dashboard';
import Blogs from './pages/Blogs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>  
      <div>
        <Routes>
          <Route path='/' element={<><Sidebar /><Dashboard /><Panel /></>}/>
          <Route path='/blogs' element={<Blogs />}/>
        </Routes>
      </div>
    </Router>            
  );
}

export default App;

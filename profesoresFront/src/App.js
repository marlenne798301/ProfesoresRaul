import {Routes, Route} from 'react-router-dom';
import './App.css';
import ProfesoresAgregar from './components/ProfesoresAgregar';
import Home from './pages/Home';
import Profesores from './pages/Profesores';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = { <Home/> }/>        
        <Route path='/profesores'>
          <Route index element = { <Profesores/> }/>
          <Route path='agregar' element = { <ProfesoresAgregar/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

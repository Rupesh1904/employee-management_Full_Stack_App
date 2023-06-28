import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import FooterComponent from './Components/FooterComponent';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddEmployeeComponent from './Components/AddEmployeeComponent';



function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        
        <Routes>
          <Route path="/" Component={ListEmployeeComponent}></Route>
          <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <Route path='/add-employee' Component={AddEmployeeComponent}></Route>
          <Route path='/edit-employee/:id' Component={AddEmployeeComponent}></Route>

        </Routes>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Login from './components/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
function App() {
  // console.log("hello");
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
    <Route path='/Login' element={<Login/>} ></Route>
    <Route path='/Signup' element={<Signup/>} ></Route>
    </Routes>
    </BrowserRouter> 
     {/* <Login/> */}
     {/* <Signup/> */}
    </div>
  );
}

export default App;

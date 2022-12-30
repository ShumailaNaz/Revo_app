import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Search from './pages/Search/Search';
import Review from './pages/Review/Review';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Signup from './components/Signup';



function App() {

  return (

    <div className="App">
      
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/post' element={<Post />} ></Route>
    <Route path='/search' element={<Search />} ></Route>
    <Route path='/reviews/:id' element={<Review />} ></Route>
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/signup' element={<Signup />} ></Route>
    </Routes>
    </BrowserRouter> 
  
     </div>
  );
}

export default App;

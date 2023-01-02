import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Search from './pages/Search/Search';
import Review from './pages/Review/Review';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Signup from './components/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import Reviews from './components/Reviews';
// import Picture from './data/Picture';

function App() {
 const {authIsReady,user}=useAuthContext()

 return (

    <div className="App">
    {authIsReady && (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
    <Route path='/' element={<Home />} ></Route>
    {/* <Route path='/picture' element={<Picture/>} ></Route> */}
    <Route path='/post' element={user ? <Post/> : <Login/>}></Route>
    <Route path='/search' element={<Search />} ></Route>
    <Route path='/reviews' element={<Reviews/>} ></Route>
    <Route path='/login' element={user ? <Post/> :<Login/>}></Route>
    <Route path='/signup' element={user ? <Post/> :<Signup/>} ></Route>
    </Routes>
    </BrowserRouter> 
    )}    
   </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter,Route,Routes,redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Search from './pages/Search/Search';
import Review from './pages/Review/Review';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Signup from './components/Signup';



function App() {
  const { authIsReady, user } =useAuthContext()

  return (

    <div className="App">
      {authIsReady && (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/post' element={<Post />} ></Route>
    <Route path='/search' element={<Search />} ></Route>
    <Route path='/reviews/:id' element={!user ? <Review /> : <Home />} ></Route>
    <Route path='/login' element={!user ? <Login/> : <Review />} ></Route>
    <Route path='/signup' element={!user ? <Signup/> : <Review />} ></Route>
    </Routes>
    </BrowserRouter> 
  )}
     </div>
  );
}

export default App;

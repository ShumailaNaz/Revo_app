import './App.css';
import { BrowserRouter,Route,Routes,redirect } from 'react-router-dom';
// import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Signup from './components/Signup';
import { useAuthContext } from './hooks/useAuthContext';

import Reviewform from './pages/Review/Reviewform';
import Review from './pages/Review/Review';


function App() {
  const {authIsReady, user} =useAuthContext()

 return (

    <div className="App">
      {authIsReady && (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} ></Route>
    {/* <Route path='/search' element={<Search />} ></Route> */}
    <Route path='/yourreview' element={<Review />} ></Route>

    {/* <Route path='/reviews/:id' element={!user ? <Review /> : <Home />} ></Route> */}
    {!user ?<Route path='/login' element={ <Login/>}>
    </Route> : <Route path='/postreview' element={ <Reviewform />}>
    </Route> } 
    {!user ?<Route path='/signup' element={ <Signup/>}>
    </Route> : <Route path='/review' element={ <Reviewform />}>
    </Route> } 
    {/* <Route path='/signup' element={!user ? <Signup/> : <Review />} ></Route> */}
    </Routes>
    </BrowserRouter> 
  )}
     </div>
  );
}

export default App;

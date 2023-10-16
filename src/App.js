import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Service from './Pages/Service';
import Menu from './Pages/Menu';
import Navbar from './Components/Common/Navbar';
import PageNotfound from './Pages/PageNotfound';
import About from './Pages/About';
import UserProps from './props/UserProps';
import UserStateHooks1 from './Hooks/useState/UserStateHooks1';
import StateObject from './Hooks/useState/StateObject';
import Timer from './Hooks/useEffect/Timer';
import UserFetchData from './Hooks/useEffect/UserFetchData';
function App() {
  return (
    <>
      {/* <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service/:hello' element={<Service/>}/>
          <Route path='/menu/:id/:name' element={<Menu/>}/>
          <Route path='/about/:id' element={<About/>}/>
          <Route path='*' element={<PageNotfound/>}/>
        </Routes>
      </Router> */}


      {/* <UserProps/> */}

    {/* <UserStateHooks1/> */}
    {/* <StateObject/> */}
    {/* <Timer/> */}
    <UserFetchData/>
    </>
  );
}

export default App;

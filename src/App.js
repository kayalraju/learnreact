import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Service from './Pages/Service';
import Menu from './Pages/Menu';
import Navbar from './Components/Common/Navbar';
import PageNotfound from './Pages/PageNotfound';
import About from './Pages/About';
import UserProps from './props/UserProps';
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


      <UserProps/>

    
    </>
  );
}

export default App;

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
import GetUserData from './Axios/GetUserData';
import AxiosRoute from './Axios/AxiosRoute';
import TestCount from './Hooks/usereducer/TestCount';
import GetUser from './Hooks/contex/GetUser';
import GetContex from './Hooks/contex/notes/GetContex';
import GetData from './Hooks/contex/GetData';
import UserForm from './formhandle/UserForm';
import AddStudent from './formhandle/AddStudent';
import FetchStudent from './formhandle/FetchStudent';
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
    {/* <UserFetchData/> */}
    {/* <AxiosRoute/> */}
    {/* <TestCount/> */}
    {/* <GetContex>
      <GetUser/> 
      <GetData/>
    </GetContex> */}
    {/* <UserForm/> */}
    {/* <AddStudent/> */}
    <FetchStudent/>
      

    </>
  );
}

export default App;

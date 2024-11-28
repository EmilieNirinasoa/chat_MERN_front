
import './App.css';
// import Login from './Components/Login';
import  {Routes,Route} from 'react-router-dom'
import MainContainer from './Components/MainContainer';
import Login from './Components/Login';
import Welcome from './Components/Welcome'
import ChatArea from './Components/ChatArea'
import UsersGroups from './Components/Users_Groups'
import Users from './Components/Users'
import CreateGroup from './Components/CreateGroup'
function App() {
  return (
    <div className="App">
      {/* <MainContainer/> */}
      <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='app' element={ <MainContainer/>}>
        <Route path='Welcome' element={ <Welcome/>}></Route>
        <Route path='Chat/:_id' element={ <ChatArea/>}></Route>  
        <Route path='Groups' element={ <UsersGroups/>}></Route> 
        <Route path='Users' element={ <Users/>}></Route>
        <Route path='create_Group' element={ <CreateGroup/>}></Route>      
        </Route>
         
      </Routes>
      {/* <Login/> */}
    </div>
  );
}

export default App;

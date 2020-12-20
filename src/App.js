
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp' 
import Home from './components/Home'

function App() {
  
  return (

    <div className="App" >
      <Switch>
        <Route path="/login" component= {Login} /> 
        <Route path="/signup" component= {SignUp}/>
        <Route path="/home" component= {Home}/>
      </Switch>
     
    </div>
)
}


export default App


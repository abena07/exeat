import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'


function Login() {


    const API_ENDPOINT = "http://localhost:3000/"

    let history = useHistory()
    
    const[ studentID, setStudentID]= useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedin, setLoggedin]= useState(false)



    const handleStudentIdInput=(event)=>{
        setStudentID(event.target.value)
    }

    const handleEmailInput=(event)=>{
        setEmail(event.target.value)
    }

    const handlePasswordInput=(event)=>{
        setPassword(event.target.value)
    }

    const handleLoggedin=(event) =>{
       event.preventDefault()

        console.log('try again')
        axios.post(`${API_ENDPOINT}/student/login`,{
            
 
            studentID: studentID,
            password: password,
            email: email
  
          }).then((res) => {
        
              console.log('success')      
              if(res.status === 200){
                  localStorage.setLoggedin(true)
                  history.push("/home")
              }
          }).catch((err) => {
              console.log(err)
              
             
          })
    }

   const handleLoggedout=(event)=>{
        setLoggedin(false)
    }

    return(
        <div>
         {
         loggedin
         ?

         <>
        <Home/>
        <button onClick={handleLoggedout}>Log Out </button>
        </>
        :
        <form>
            

            <div className ="form-inner">
             <h2>Log In</h2> 
            

            

             <div className="form-group">
             <label>Student Id</label>
             <input type="name" value={studentID} onChange={handleStudentIdInput}></input>
             </div>

             <div className="form-group">
            
             <label>Email</label>
             <input type="email" value={email} onChange={handleEmailInput}></input>
             </div>

             <div className="form-group">
             <label>Password</label>
             <input type="password" value={password} onChange={handlePasswordInput}></input>
             </div>   


            
             <div>
              <button onClick={handleLoggedin}>Log In</button>
             </div>





         </div>   
        </form>    


         }   












      </div>
    )}
    
export default Login
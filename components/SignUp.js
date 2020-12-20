import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'

function SignUp() {


    const API_ENDPOINT = "http://localhost:3000/"

    let history = useHistory()
    const [firstname,setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const[ studentID, setStudentID]= useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpswd, setConfirmpswd]= useState("")
    const [signedin, setSignedin]= useState(false)


    const handleFirstnameInput=(event)=>{
        setFirstname(event.target.value)
    }

    const handleLastnameInput=(event)=>{
        setLastname(event.target.value)
    }

    const handleStudentIdInput=(event)=>{
        setStudentID(event.target.value)
    }

    const handleEmailInput=(event)=>{
        setEmail(event.target.value)
    }

    const handlePasswordInput=(event)=>{
        setPassword(event.target.value)
    }

    const handleConfirmpswdInput=(event)=>{
        setConfirmpswd(event.target.value)
    }

    const handleSignedin=(event) =>{
       event.preventDefault()

        console.log('try again')
        axios.post(`${API_ENDPOINT}/student/signup`,{
            firstname:firstname, 
            lastname:lastname,
 
            studentID: studentID,
            password: password,
            confirmpswd:confirmpswd,
            email: email
  
          }).then((res) => {
        
              console.log('success')      
              if(res.status === 200){
                  localStorage.setSignedin( true)
                  history.push("/login")
              }
          }).catch((err) => {
              console.log(err)
              
             
          })
    }

   const handleSignedout=(event)=>{
        setSignedin(false)
    }

    return(
        <div>
         {
         signedin
         ?

         <>
        <Login/>
        <button onClick={handleSignedout}>Sign Out </button>
        </>
        :
        <form>
            

            <div className ="form-inner">
             <h2>Sign Up</h2> 
            

            <div className="form-group">
              <label>First Name</label>
             <input type="name" value={firstname} onChange={handleFirstnameInput}></input>
             </div>

             <div className="form-group">   
             <label>Last Name</label>
             <input type="name" value={lastname} onChange={handleLastnameInput}></input>
             </div>

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


             <div className="form-group">  
             <label>Confirm Password</label>
             <input type="password" value={confirmpswd} onChange={handleConfirmpswdInput}></input>
             </div>
            
             <div>
              <button onClick={handleSignedin}>Sign in</button>
             </div>





         </div>   
        </form>    


         }   












      </div>
    )}
    
export default SignUp
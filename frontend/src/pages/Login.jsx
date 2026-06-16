import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login(){

 const navigate =
 useNavigate();

 const [username,setUsername]
 = useState("");

 const [password,setPassword]
 = useState("");

 const submit=async(e)=>{

  e.preventDefault();

  try{

   const res =
   await api.post(
    "login/",
    {
     username,
     password
    }
   );

   localStorage.setItem(
    "token",
    res.data.access
   );

   navigate("/events");

  }catch{

   alert(
    "Invalid credentials"
   );
  }
 };

 return(

 <div className="container mt-5">

 <h2>Login</h2>

 <form onSubmit={submit}>

 <input
 className="form-control mb-3"
 placeholder="Username"
 onChange={(e)=>
 setUsername(
 e.target.value
 )}
 />

 <input
 type="password"
 className="form-control mb-3"
 placeholder="Password"
 onChange={(e)=>
 setPassword(
 e.target.value
 )}
 />

 <button
 className="btn btn-success"
 >
 Login
 </button>

 </form>

 </div>
 );
}

export default Login;
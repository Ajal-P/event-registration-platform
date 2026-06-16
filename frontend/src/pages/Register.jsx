import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

 const navigate = useNavigate();

 const [form,setForm] =
 useState({
  username:"",
  email:"",
  password:""
 });

 const handleChange=(e)=>{

  setForm({
   ...form,
   [e.target.name]:
   e.target.value
  });
 };

 const submit=async(e)=>{

  e.preventDefault();

  try{

   await api.post(
    "register/",
    form
   );

   alert(
    "Registration Successful"
   );

   navigate("/login");

  }catch{

   alert(
    "Registration Failed"
   );
  }
 };

 return(

 <div className="container mt-5">

 <h2>Register</h2>

 <form onSubmit={submit}>

 <input
 className="form-control mb-3"
 name="username"
 placeholder="Username"
 onChange={handleChange}
 />

 <input
 className="form-control mb-3"
 name="email"
 placeholder="Email"
 onChange={handleChange}
 />

 <input
 className="form-control mb-3"
 type="password"
 name="password"
 placeholder="Password"
 onChange={handleChange}
 />

 <button
 className="btn btn-primary"
 >
 Register
 </button>

 </form>

 </div>
 );
}

export default Register;
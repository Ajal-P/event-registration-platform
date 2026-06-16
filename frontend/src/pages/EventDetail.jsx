import {
 useEffect,
 useState
}
from "react";

import {
 useParams
}
from "react-router-dom";

import api
from "../services/api";

import Navbar
from "../components/Navbar";

function EventDetail(){

 const {id} =
 useParams();

 const [event,setEvent]
 = useState(null);

 useEffect(()=>{

  api
  .get(`events/${id}/`)
  .then(res=>
   setEvent(res.data)
  );

 },[id]);

 const register=
 async()=>{

  try{

   await api.post(
    `events/${id}/register/`
   );

   alert(
    "Registered"
   );

  }catch{

   alert(
    "Already Registered"
   );
  }
 };

 if(!event)
 return <p>Loading...</p>;

 return(

 <>
 <Navbar/>

 <div className="container mt-5">

 <h2>
 {event.title}
 </h2>

 <p>
 {event.description}
 </p>

 <p>
 {event.location}
 </p>

 <button
 className="btn btn-success"
 onClick={register}
 >
 Register
 </button>

 </div>
 </>
 );
}

export default EventDetail;
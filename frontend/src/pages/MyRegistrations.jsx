import {
 useEffect,
 useState
}
from "react";

import api
from "../services/api";

import Navbar
from "../components/Navbar";

function MyRegistrations(){

 const [items,setItems]
 = useState([]);

 useEffect(()=>{

  api
  .get(
   "my-registrations/"
  )
  .then(res=>
   setItems(
    res.data
   )
  );

 },[]);

 return(

 <>
 <Navbar/>

 <div className="container mt-4">

 <h2>
 My Registrations
 </h2>

 {items.map(item=>(

 <div
 key={item.id}
 className="card mb-3"
 >

 <div
 className="card-body"
 >

 <h4>
 {item.event_title}
 </h4>

 <p>
 Registered:
 {item.registered_at}
 </p>

 </div>

 </div>

 ))}

 </div>
 </>
 );
}

export default MyRegistrations;
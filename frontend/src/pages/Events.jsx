import { useEffect,useState }
from "react";

import api from "../services/api";

import Navbar
from "../components/Navbar";

import { Link }
from "react-router-dom";

function Events(){

 const [events,setEvents]
 = useState([]);

 useEffect(()=>{

  loadEvents();

 },[]);

 const loadEvents=
 async()=>{

  const res =
  await api.get("events/");

  setEvents(
   res.data
  );
 };

 return(

 <>
 <Navbar/>

 <div className="container mt-4">

 <h2>Events</h2>

 {events.map(event=>(

 <div
 key={event.id}
 className="card mb-3"
 >

 <div className="card-body">

 <h4>
 {event.title}
 </h4>

 <p>
 {event.location}
 </p>

 <Link
 className="btn btn-primary"
 to={`/events/${event.id}`}
 >
 View
 </Link>

 </div>

 </div>

 ))}

 </div>
 </>
 );
}

export default Events;
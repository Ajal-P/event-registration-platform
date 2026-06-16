import {
 BrowserRouter,
 Routes,
 Route
}
from "react-router-dom";

import Login
from "./pages/Login";

import Register
from "./pages/Register";

import Events
from "./pages/Events";

import EventDetail
from "./pages/EventDetail";

import MyRegistrations
from "./pages/MyRegistrations";

import ProtectedRoute
from "./components/ProtectedRoute";

import { Navigate } from "react-router-dom";

function App(){

 return(

 <BrowserRouter>

 <Routes>

  <Route
  path="/"
  element={<Navigate to="/login" />}
 />

 <Route
 path="/login"
 element={<Login/>}
 />

 <Route
 path="/register"
 element={<Register/>}
 />

 <Route
 path="/events"
 element={
 <ProtectedRoute>
 <Events/>
 </ProtectedRoute>
 }
 />

 <Route
 path="/events/:id"
 element={
 <ProtectedRoute>
 <EventDetail/>
 </ProtectedRoute>
 }
 />

 <Route
 path="/my-registrations"
 element={
 <ProtectedRoute>
 <MyRegistrations/>
 </ProtectedRoute>
 }
 />

 </Routes>

 </BrowserRouter>
 );
}

export default App;
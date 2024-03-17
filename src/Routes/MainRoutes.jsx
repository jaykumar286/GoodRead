import Signin from "Pages/Auth/Signin";
import Signup from "Pages/Auth/Signup";
import Error from "Pages/Error";
import Home from "Pages/Home";
import { Route,Routes } from "react-router-dom";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}

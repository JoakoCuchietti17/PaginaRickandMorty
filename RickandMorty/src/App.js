import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/public/Footer";
import Main from "./components/public/Main";
import NavBar from "./components/public/NavBar";

import { Detail } from './components/public/Detail';
import { UserForm } from "./components/public/UserForm";

function App() {
  return (
    <div>
      <NavBar />

      
       <Routes>
        <Route exact path={"/"} element={<Main />}/>
        <Route exact path={"/details/:id"} element={<Detail/>}/>
        <Route exact path={"/user-form"} element={<UserForm/>}/>
       </Routes>
      
      
      <Footer />
    </div>
  );
}


export default App;

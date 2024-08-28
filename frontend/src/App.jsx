import { Route, Routes } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";

function App() {
    
    return (
        <div>
          <Routes>
            <Route path="/" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
    );
}

export default App;

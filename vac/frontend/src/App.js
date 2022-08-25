import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import VaccList from "./components/VaccList";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import CreateVacc from "./components/CreateVacc";
import Home from "./components/Home";
function App() {
  return (
    <Router>
    <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/AdminLogin" element={<AdminLogin/>}/>
            <Route exact path="/UserLogin" element={<UserLogin/>}/>
            <Route exact path="/VaccList" element={<VaccList/>}/>
            <Route exact path="/CreateVacc" element={<CreateVacc/>}/>
          </Routes>
    </div>
    </Router>
  );
}

export default App;
import {Routes, Route} from "react-router-dom";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";

const RouterSetup = () => {
    return (
        <Routes>
            <Route path="/" element={(<div>hello </div>)}  />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default RouterSetup;
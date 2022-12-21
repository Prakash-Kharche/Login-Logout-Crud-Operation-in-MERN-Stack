import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LgRegistration from "./components/LgRegistration";
import Login from "./components/Login";
import Registration from "./components/Registration";
import TotalList from "./components/TotalList";
import Updatedt from "./components/Updatedt";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />} >

            <Route index element={<Registration />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/totalList" element={<TotalList />} />
            <Route path="/LgRegistration" element={<LgRegistration />} />
            <Route path="/updatedt/:user_id" element={<Updatedt />} />

          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

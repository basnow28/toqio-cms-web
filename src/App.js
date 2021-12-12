import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import SideMenu from "./modules/sideMenu";
import NavBar from './containers/navBar';

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/sideMenu" element={<SideMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

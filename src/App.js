import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import SideMenu from "./modules/sideMenu";
import NavBar from './containers/navBar';
import EditSideMenu from './modules/sideMenu/editSideMenu';
import Dashboard from './modules/dashboard';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <Router>
        <div className='main-wrapper'>
          <NavBar />
          <div>
            <Routes>
              <Route exact path="/sideMenu" element={<SideMenu />} />
              <Route exact path="/sideMenu/edit" element={<EditSideMenu />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

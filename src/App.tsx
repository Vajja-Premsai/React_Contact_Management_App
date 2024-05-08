
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';
import logo from './utils/r32.png';

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <header className='z-40 w-full fixed shadow-sm shadow-slate-800 top-0 text-2xl text-black-100 bg-indigo-300 font-bold p-4 flex items-center'>
        {/* Logo Image */}
        <img src={logo} alt="Logo" className="w-14 h-14 mr-6" /> 
        {/* Page Title */}
        <span>
          {currentRoute === "/" ? 'Contact Management App' : 'Charts and Maps'}
        </span>
      </header>

      <div className='flex w-full'>
        <div className='sticky top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;


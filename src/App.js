
import { Routes,Route} from 'react-router/lib/components';
import Wrapper from './Components/Wrapper';
import './App.css';
import { Link } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={ <Wrapper/>} />
        <Route path="/people/:Id" element={ <Wrapper />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

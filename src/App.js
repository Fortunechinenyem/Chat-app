
import {Route, Routes} from "react-router-dom"
import Wrapper from './Components/Wrapper';
import './App.css';
import ChatList from "./Components/ChatList";

function App() {
  return (
    <>
    <div>
      
      <Routes>
        <Route path="/" element={ <Wrapper/>} />
        <Route path="/people/:Id" element={ <ChatList />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

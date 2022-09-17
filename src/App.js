import logo from './logo.svg';
import './App.css';
import Inbound from './inbound/inbound';
import Inboundheader from './inboundheader/inboundheader';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import InboundChecker from './InboundChecker/InboundChecker';

function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
        <Routes>
       {/* <Route path='/' element={<Inboundheader/>}/> */}
      <Route path='/' element={<Inbound/>}/>
      <Route path='/pdfcheck' element={<InboundChecker/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

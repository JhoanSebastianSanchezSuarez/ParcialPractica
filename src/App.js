import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import LoginForm from './components/LoginForm';
import Deportes from './components/Deportes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/deportes" element={<Deportes/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path= "/" element={<HomePage />} />
        <Route path= "recipe/:id" element={<HomePage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

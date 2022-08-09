import Navbar from './navbar/Navbar';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

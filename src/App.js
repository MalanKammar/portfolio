import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Menu from './component/Menu';
import Home from './component/Home';
import About from './component/About';
import Resume from './component/Resume';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Pnf from './component/Pnf';
import Footer from './component/Footer'

function App() {
  return (
     <BrowserRouter>
        <Menu/>

        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/about'} element={<About/>}></Route>
          <Route path={'/resume'} element={<Resume/>}></Route>
          <Route path={'/projects'} element={<Projects/>}></Route>
          <Route path={'/contact'} element={<Contact/>}></Route>
          <Route path={'/*'} element={<Pnf/>}></Route>
        </Routes>
        <Footer/>
     </BrowserRouter>
  );
}

export default App;

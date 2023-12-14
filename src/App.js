import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar, { Navbar } from './Components/Navbar';
import Crousal from './Components/Welcome';
import SecurityUpdate from './Components/Securityupdate';
import Statistics from './Components/Statistics';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import About from './Components/Contactus';

function App() {
  return (
    <>
    <NavigationBar/>

    <Routes>
      
    <Route path={'/'} element={<Welcome/>}/>
<Route path={'Abt'} element={<About/>}/>

</Routes>
<Footer/>
    </>
    );
}

export default App;

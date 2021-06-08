import './styles/App.css';

import Controller from './components/Controller'
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (

    <div className="App">
    <Navbar/>
    <Controller/>
    <Footer/>
    </div>
  );
}

export default App;

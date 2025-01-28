import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
// import ParticlesBackground from './components/Particles/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Home/>
      <Footer />

    </div>

  );
}

export default App;

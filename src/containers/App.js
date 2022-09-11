import Navbar from '../components/Navbar';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import SocialNetwork from './SocialNetwork';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
      <SocialNetwork />    
    </div>  
  );
}

export default App;

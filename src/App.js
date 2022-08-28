import './App.css';
import Home from './components/Home';
import Join from './components/Join';
import Plans from './components/Plans';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home/>
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;

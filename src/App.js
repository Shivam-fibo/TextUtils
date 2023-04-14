
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <>
   <Navbar title="TextUtlits" />
   <div className="container">
   <Textform heading="Enter your text here to analyze"/>
   </div>
   </>
  );
}

export default App;

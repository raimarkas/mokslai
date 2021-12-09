import './App.css'
import Form from "./components/Form";
import Visitors from "./components/Visitors";

function App() {

  return (
    <div className="App">
    <div className='form'><Form/></div>
    <div className='list'><Visitors/></div>
    </div>
  );
}

export default App;

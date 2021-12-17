import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import QuizPage from './pages/QuizPage';
import ContactPage from './pages/ContactPage';

function App() {


  return (
    <div className="App">
      <Router>
      <Header/>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/quiz' element={<QuizPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;

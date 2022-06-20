import './App.css';
import NavBar from './components/NavBar';
import SlideShow from './components/SlideShow';


function App() {
  return (
    <div className="App">

     <NavBar/>
     <div className='slideShow'>
       <SlideShow/>
      </div>
     
  
    </div>
  );
}

export default App;

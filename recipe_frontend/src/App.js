import './App.css';
import NavBar from './components/NavBar';
import SlideShow from './components/SlideShow';
import SlideShow1 from './components/SlideShow1';


function App() {
  return (
    <div className="App">

     <NavBar/>
     <div className='slideShow'>
       <SlideShow1/>
      </div>
     
  
    </div>
  );
}

export default App;

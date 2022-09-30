import './App.css';
import bannerImg from './images/banner.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div 
      className="banner"
      style={{backgroundImage: `url(${bannerImg})`}}>
        <div className='bnImg00'></div>
        <div className='bnImg00'></div>
        <div className='bnImg00'></div>
        <div className='bnImg00'></div>
        <div className='bnImg00'></div>
        <div className='bnImg00'></div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import bannerImg from './images/banner.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div 
      className="banner">
        <div className='bnImg00'
        style={{backgroundImage: `url(${bannerImg})`}}></div>
        <div className='bnImg01'></div>
        <div className='bnImg02'></div>
        <div className='bnImg03'></div>
        <div className='bnImg04'></div>
        <div className='bnImg05'></div>
      </div>
    </div>
  );
}

export default App;

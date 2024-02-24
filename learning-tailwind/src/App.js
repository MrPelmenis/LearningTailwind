import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);


  const handleScroll = () => {
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );


    const position = window.pageYOffset + window.screen.height;


    
    setScrollPosition((position) * document.body.clientWidth / height);
  };

  return (
    <div className="App">
      <div className='w-full h-10px border border-sky-500 fixed' >
        <div className='h-10 bg-indigo-500' style={{width: scrollPosition}}></div>
      </div>
      <div className='' >
        <div className='' style={{height:6000}}></div>
      </div>

    </div>
  );
}

export default App;

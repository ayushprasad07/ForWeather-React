// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
// import LoadingBar from 'react-top-loading-bar'


function App() {
  // const [progress,setProgress]=useState(0);

  

  return (
    <div className="App" style={{minWidth:"100%",minHeight:"100%"}}>
      <Navbar/>
      {/* <LoadingBar
      height={3}
        color='#abc4ff'
        progress={progress}
        
      /> */}
      <Card />
    </div>
  );
}

export default App;

import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div className="container">
      <h1> 최상단 화면 </h1>
      <Top number={number} />
      바텀에 함수 넘기기 ! 숙제.
      <Bottom />
    </div>
  );
}

export default App;

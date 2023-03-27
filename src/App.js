import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState("spanish")

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button onClick={() => setLang('english')}>Angol</button>
          <button onClick={() => setLang('spanish')}>Spanyol</button>
          <button onClick={() => setLang('german')}>Német</button>
        </nav>
        <Countries lang={lang} />
      </header>
    </div>
  );
}

export default App;

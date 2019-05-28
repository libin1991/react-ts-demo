import React from 'react'
import logo from './logo.svg'
import Hello from './components/Hello'
import HelloClass from './components/Hello/HelloClass'

import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        <Hello name="wuliang" enthusiasmLevel={2} />
        <HelloClass name="Muscular man" enthusiasmLevel={10} />
      </footer>
    </div>
  )
}

export default App

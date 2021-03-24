import React from 'react';
import logo from './logo.svg';
import './App.css';
import { totalmem } from 'node:os';

let name1: string = 'tim'
name1 = 'tim2'

let num = 2
let bool = true

let arry = [true, true, false]

interface NAME {
  first: string,
  last: string | null,
}

let name: NAME = {
  first: 'tom',
  last: null
}

const func1 = (x: number, y: number):number => { return x + y}
console.log(func1(1, 2))


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

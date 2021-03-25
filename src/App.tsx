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

type PROFILE = {
  age: number,
  city: string,
}

type LOGIN = {
  username: string,
  password: string,
}

type USER =  PROFILE & LOGIN
const userA: USER = {
  age: 30,
  city: 'tokyo',
  username: 'aa',
  password: 'aaa',
}

console.log(userA)

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

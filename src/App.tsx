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

// unionTypes　変数が受け取れる型を指定できる
let value: boolean | number
value = true
value = 10

// 配列に入る型を指定できる
let arryUni: (number | string)[]
arryUni = [0,1,'aa']

// literalTypes 
//この変数に入る値を指定できる
let company: "Facebook" | "Google" | "Amazon"
company = "Facebook"

let memory: 2 | 3 | 4
memory = 2

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

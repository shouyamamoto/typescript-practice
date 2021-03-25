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

// type of 型を取得して他の型を指定する
// JSONのデータタイプが複雑だった場合、それをコピーすることによって自分たちで型を指定していかなくても継承してくれるので楽
let massage: string = 'Hi'
let massage2: typeof massage = 'Hello'

let animal = {cat: 'small cat'}
let newAnimal: typeof animal = {cat: 'cat'}

// key of
type KEYS = {
  primary: string
  secondary: string
}

// KEYSのprimaryとかsecondaryをunionTypeで取り出してくれる(どちらかの文字列しかいれられない)
let key: keyof KEYS
key = "primary"

// typeofとkeyofの組み合わせ
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
}
let keySports: keyof typeof SPORTS
keySports = "baseball"


// enum(列挙型)　自動に連番をつけてくれる
enum OS {
  Windows, // 0
  Mac, // 1
  Linux  //2
}
interface PC {
  id: number
  OSType: OS
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows
}
const PC2: PC = {
  id: 2,
  OSType: OS.Mac
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

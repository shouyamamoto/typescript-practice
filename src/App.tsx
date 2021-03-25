import React from 'react';
import logo from './logo.svg';
import './App.css';
import { totalmem } from 'node:os';
import Data from './data.json'
import Test from './testComponent'

// JSONの型推論
type USERS = typeof Data

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

// 型の互換性
const comp1 = 'test';
let comp2: string = comp1 

let funcComp1 = (x:number) => {}
let funcComp2 = (x:string) => {}

// ジェネリクス　超重要！！！！！
interface GEN<T>{
  item: T
}
// 適応したいデータ型を使うときに動的に変えることができる
const gen0: GEN<string> = {item: "hello"}
const gen1: GEN<number> = {item: 2}

// 初期設定
interface GEN1<T=string>{
  item: T
}
const gen3: GEN1 = {item: 'hello'}

// extendsの後ろに書いた型を動的に指定できる
interface GEN2<T extends string | number>{
  item: T
}
const gen4: GEN2<string> = {item: 'hello'}
const gen5: GEN2<number> = {item: 2}
// const gen6: GEN2<boolean>= {item: 2}

function funcGen<T> (props: T) {
  return {item: props}
}
funcGen<string>('hello')
funcGen<string | null>(null)

function funcGen1<T extends string | null >(props: T) {
  return {value: props}
}
funcGen1(null)

interface Props {
  price: number
}
function funcGen2<T extends Props>(props: T) {
  return {value: props.price}
}
console.log(funcGen2({price: 2}))
// funcGen2('taro')

const funcGen3 = <T extends Props>(props: T) => {
  return {value: props.price} 
}


// React
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Test text="hello from App" />
      </header>
    </div>
  );
}

export default App;

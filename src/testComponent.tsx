import React, { useState } from 'react'

interface Props {
  text: string
}

interface UserData {
  id: number,
  name: string
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null)
  // UserDataにそったオブジェクトしか指定できないようになっている
  const [user, setUser] = useState<UserData>({id: 1, name: 'tom'})

  const [inputData, setInputData] = useState('')

  const onClickInc = () => {
    setCount(count)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputData(e.target.value)
  
  return (
    <div>
      <h1>{props.text}</h1>
      <p>{count}</p>
      <input type="text" value={inputData} onChange={handleInputChange}/>
      <button onClick={onClickInc}></button>
      <h2>{inputData}</h2>
    </div>
  )
}

export default TestComponent

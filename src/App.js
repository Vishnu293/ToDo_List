import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [toDoList,setToDoList] = useState('')
  const [toDo,setToDo] = useState([])

  function inputToDo(e) {
    var temp = e.target.value
    setToDoList(temp)
  }
  function addToDo() {
    if(toDoList==="") {
      alert("Enter A Task")
    }
    else {
      let newToDo = [
        ...toDo,
        {
          key: toDo.length,
          name: toDoList
        }
      ]
      setToDo(newToDo);
      setToDoList('');
    }
  }
  function delToDo(k) {
    const newToDo = toDo.filter((item) => item.key !== k);
    setToDo(newToDo)
  }
  return (
    <div>
      <div className='container'>
        <h1>To<span>Do</span> List</h1>
        <input type='text' className='input' value={toDoList} onChange={(e)=> inputToDo(e)}></input>
        <button className='btn' onClick={addToDo}>Add</button>
        <ul>
            {
              toDo.map((td) =>(
                <li key={td.key}>
                <p>{td.name}</p>
                <button onClick={()=> delToDo(td.key)}>❌</button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default App

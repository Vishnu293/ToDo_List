import React, { useState }  from 'react'

const App = () => {
  const [info, showMore] = useState("loremofnfffaf ajfand WK");

  const eventHandler = () => {
    return (
      <div>
      <p>xloreee ee eaeref fefaeaee rereafaegbaegaebagea egegag</p>
      </div>
    )
  }

  return (
    <div>
      <center>
        <h1>My Counter App</h1>
        {info}<br></br>
        <button onClick={eventHandler}>Show More</button>
      </center>
    </div>
  )
}

export default App

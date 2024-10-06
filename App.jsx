import React, { useState } from 'react'

function App() {
  const [name,setName]=useState("Ajay");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default App;

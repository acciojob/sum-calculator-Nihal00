
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum, setSum] = useState(0);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={(e) => setSum(parseInt(e.target.value) + sum) } />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App

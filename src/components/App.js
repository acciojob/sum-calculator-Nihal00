
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum, setSum] = useState(0);

  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Sum Calculator</h2>
        <input type="number" onChange={(e) => setSum(e.target.value + sum) } />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App

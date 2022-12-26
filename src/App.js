import { RoutesX } from "./RoutesX";
import { Context } from "./Context";
import { useState } from "react";
function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
     <Context.Provider value={{data, setData}}>
        <RoutesX/>
     </Context.Provider>
    </div>
  );
}

export default App;

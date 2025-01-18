import React, { useState, useEffect, useRef } from 'react';
import Routing from './Routes/Routes.routes'; 


function App() {
  const [loading, setLoading] = useState(true);
  const pageRef = useRef(null);

  return (
    <div id="App">  
        <div >
          <Routing />
        </div>
       
    </div>
  );
}

export default App;

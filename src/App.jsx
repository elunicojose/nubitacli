import { useEffect, useState } from "react";

function App() {
  let [backendData, setBackendData] = useState([]);

  //const chu = process.env.VITE_BASE_URL || 'no hay url';
  console.log('BASE URL= ', import.meta.env.VITE_BASE_URL)

  console.log('VALOR ENV= ', import.meta.env.VITE_SOME_KEY) // 123
  console.log('node env= ', import.meta.env.VITE_NODE_ENV) 
  console.log(import.meta.env)
  

  useEffect(() => {
    
    async function fetchData() {
      const resp = await fetch("/frutas")
      const resData = await resp.json()
      setBackendData(resData)
    }

    fetchData();
  }, []);

  return (
    <div>
      { backendData ? (
        backendData.map((fruta, i) => (
        <h1 key={i}>{fruta.nombre}</h1>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

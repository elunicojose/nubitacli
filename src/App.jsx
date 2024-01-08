import { useEffect, useState } from "react";

function App() {
  let [backendData, setBackendData] = useState([]);
  console.log('meta SERVER URL= ', import.meta.env.SERVER_URL)
  
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

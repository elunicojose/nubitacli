import { useEffect, useState } from "react";

function App() {
  let [backendData, setBackendData] = useState([]);
  console.log('meta VITE_BASE URL= ', import.meta.env.VITE_BASE_URL)
  console.log('process VITE_BASE URL= ', process.env.VITE_BASE_URL)

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

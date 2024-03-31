import { useEffect, useState } from "react";

function App() {
  let [backendData, setBackendData] = useState([]);
  console.log('meta SERVER URL= ', import.meta.env.SERVER_URL)
  console.log('meta SERVER URL= ', process.env.SERVER_URL)
  
  useEffect(() => {
    
    async function fetchData() {
      const resp = await fetch("https://nubitamix.vercel.app/frutas")
      const resData = await resp.json()
      setBackendData(resData)
    }

    fetchData();
  }, []);

  return (
    <div>
      { backendData ? (
        backendData.map((fruta, i) => (
        <h3 key={i}>{fruta.nombre} : {fruta.costo}</h3>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

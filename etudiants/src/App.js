import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const EtudiantTotal = data.length;
  useEffect(() => {
    fetch('https://3002-fatmaakacha-react-cck07jabxp3.ws-eu107.gitpod.io/etudiants')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        console.error(error);
      });
  }, []);
  console.log(data);

  return (
    <div className="App">
      <h1> Nombres total des étudiants est : {EtudiantTotal}</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.nom}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
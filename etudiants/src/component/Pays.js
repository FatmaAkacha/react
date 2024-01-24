import { useState, useEffect } from "react";

function Pays() {
  const [data, setData] = useState([]);
  const EtudiantTotal = data.length;

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Pays</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code Postal</th>
            <th>Capital</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name.common}</td>
              <td>{item.postal}</td>
              <td>{item.capital}</td>
              <td>{item.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pays;

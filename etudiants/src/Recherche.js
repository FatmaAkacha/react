import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recherche() {
    const [data, setData] = useState([]);
    const {id} = useParams();
    const EtudiantTotal = data.length;
    useEffect(() => {
        fetch(`https://3002-fatmaakacha-react-cck07jabxp3.ws-eu107.gitpod.io/etudiants/${id}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => {
          console.error(error);
        });
    }, []);
    console.log(data);
  
    return (
      <div>
        <ul>
            <li> {data.nom}</li>
        </ul>
  
      </div>
    );
  }
export default Recherche;
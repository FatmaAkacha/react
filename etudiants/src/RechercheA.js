import { useState } from 'react';
import App from './App';

function RechercheA() {
    const [nomRecherche, setNomRecherche] = useState('');
    const [villeRecherche, setVilleRecherche] = useState('');
    const [resultats, setResultats] = useState([]);

    const handleNomRechercheChange = (event) => {
        setNomRecherche(event.target.value);
    };

    const handleVilleRechercheChange = (event) => {
        setVilleRecherche(event.target.value);
    };

    const handleRecherche = (event) => {
        event.preventDefault();
        fetch(`https://3002-fatmaakacha-node1-5gloq4f1k3b.ws-eu107.gitpod.io/etudiants?nom=${nomRecherche}&ville=${villeRecherche}`)
            .then(response => response.json())
            .then(data => setResultats(data))
            .catch(error => console.error('Erreur de recherche:', error));
    };

    function refreshPage() {
        window.location.reload(true);
      }
    return (
        <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#444', marginBottom: '20px' }}>Recherche Avancée </h1>
        <form onSubmit={handleRecherche} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input type="text" value={nomRecherche} onChange={handleNomRechercheChange} placeholder="Nom de recherche" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
            <input type="text" value={villeRecherche} onChange={handleVilleRechercheChange} placeholder="Ville de recherche" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
            <button type="submit" onClick={refreshPage} style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}> Rechercher </button>
        </form>
        <App />
        </div>
    );
}
export default RechercheA;
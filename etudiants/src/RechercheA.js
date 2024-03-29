import React, { useState } from 'react';

function RechercherA() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [data, setData] = useState([]);

    const handleInputChange1 = event => {
        setInputValue1(event.target.value);
    };

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`https://3001-fatmaakacha-node1-zk5yqyvy6qj.ws-eu107.gitpod.io/rechercherA?lastname=${inputValue}&ville=${inputValue1}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error updating data:', error));
    };
    function refreshPage() {
        window.location.reload(true);
      }

    return (
        <div className="container mt-5">
        <div className="card mx-auto" style={{ maxWidth: "300px" }}>
            <div className="card-body">
                <h1 className="card-title text-center">Rechercher</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Name" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={inputValue1} onChange={handleInputChange1} placeholder="Ville" className="form-control" />
                    </div>
                    <button type="submit" onClick={refreshPage} className="btn btn-primary btn-block">Rechercher</button>
                </form>
            </div>
        </div>
        <div className="mt-3">
            {data.map((student) => (
                <p key={student.id}>
                    {student.lastname}, {student.firstname} - {student.ville}
                </p>
            ))}
        </div>
    </div>
    );
}

export default RechercherA;
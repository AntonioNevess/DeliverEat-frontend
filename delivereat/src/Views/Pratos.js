import React from 'react';
import { Link } from 'react-router-dom';

const pratos = [
    { id: 1, name: 'Prato A' },
    { id: 2, name: 'Prato B' },
    { id: 3, name: 'Prato C' },
    // Add more dishes as needed
];

const Pratos = () => {
    return (
        <div>
            <h2>Pratos</h2>
            <div className="row">
                {pratos.map(prato => (
                    <div key={prato.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{prato.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pratos;

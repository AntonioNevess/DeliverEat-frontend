import React from 'react';
import { Link } from 'react-router-dom';

const restaurants = [
    { id: 1, name: 'Restaurant A' },
    { id: 2, name: 'Restaurant B' },
    { id: 3, name: 'Restaurant C' },
    // Add more restaurants as needed
];

const Restaurantes = () => {
    return (
        <div>
            <h2>Restaurantes</h2>
            <div className="row">
                {restaurants.map(restaurant => (
                    <div key={restaurant.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.name}</h5>
                                <Link to={`/pratos/${restaurant.id}`} className="btn btn-primary">
                                    Ver Pratos
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurantes;

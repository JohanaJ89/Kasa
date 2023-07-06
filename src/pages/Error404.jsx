import React from 'react';
import {Link} from 'react-router-dom';

function Error404 () {
    return (
        <div className='advert'>
            <h1 className='Big404'>404</h1>
        <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to = '/'>Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error404;
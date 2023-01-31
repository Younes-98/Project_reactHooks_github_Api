import React from 'react';
import { Link } from 'react-router-dom';
import AlertName from '../components/AlertName';


const NotFound = () => {
  return (
      <div className='bg-slate-200 '>
        <AlertName />
        <div className='flex flex-col p-3 h-screen text-center text-6xl pt-24'>
            <div>
                <div>
                    Erreur: <span className='text-red-500'>404</span> 
                </div>
                <p>
                    Cette page n'existe pas
                </p>
            </div>
            <Link to={'/'}>
                <button className='btn btn-outline btn-warning mt-20'>
                    Retour à l'accueil
                </button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound
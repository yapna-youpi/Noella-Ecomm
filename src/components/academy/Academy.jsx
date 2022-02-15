import React from 'react'
import { useHistory } from 'react-router-dom'

import Formation from '../home/formation/Formation'
import Card from '../business/components/card/Card'

import './academy.css'
import banner from './hero-careers.jpg'
import busi3 from '../business/assets/images/tof9.jpg'

function Academy() {
    let history = useHistory();

    const Modalite3 = {
        titre: 'Chaine de venise',
        prix: '12000.00 XAF ou 50 Ussd',
        image: busi3
    }


    return (
        <div>
            <div className="mb-5">
                <img className='academy-banner' src={banner} alt='bannier-formation' />
                <h1 className='w-100 mt-5 text-center pt-5 title-academy'>
                    <p className='text-center tex1'>Nos Différents Produits</p>
                    <p className='text-center tex2'>&</p>
                    <p className='text-center tex3'>Les Pièces Disponibles</p>
                </h1>
            </div>
            <Card name={"Nouveaux produits"} Modalite={Modalite3} />
               <h6 onClick={()=>history.push('/Business')} className='btn btn-lg bg-info d-block mx-auto my-5 w-50'>Voir Plus de Produits</h6>
            <Formation />
        </div>
    )
}

export default Academy

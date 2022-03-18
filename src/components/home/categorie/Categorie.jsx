import React from 'react'

import './categorie.css'
import img1 from './assets/tof1.jpg'
import img2 from './assets/tof2.jpg'
import img3 from './assets/tof3.jpg'

function Categorie() {
  return (
    <div id='categorie'>
        <div className="container">
            <h1 className='text-center pt-5' style={{color:"#212529"}}>Catégories Du Moi</h1>
            <h6 className='text-center'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br/>
                                        officia deserunt mollit anim id est laborum.</h6>    

            <div className="row mt-5">
                <div className="col-11 col-md-4">
                    <img className='img-categ mx-auto mb-3' width='85%' src={img1} alt='tof' />
                    <h4 className='text-center mb-3'>Torche</h4>
                    <button className='btn btn-categ'>Rejoindre</button>
                </div>    
                <div className="col-11 col-md-4">
                    <img className='img-categ mx-auto mb-3' src={img2} width='85%' alt='tof' />
                    <h4 className='text-center mb-3'>Torche</h4>
                    <button className='btn btn-categ'>Rejoindre</button>
                </div>    
                <div className="col-11 col-md-4">
                    <img className='img-categ mx-auto mb-3' src={img3} width='85%' alt='tof' />
                    <h4 className='text-center mb-3'>Torche</h4>
                    <button className='btn btn-categ'>Rejoindre</button>
                </div>    
            </div>
        </div>
        <div id="categorie-effet" class="container pt-5">
            <div className="row">
                <div class="box box-1 col-md-4">
                    <div class="cover"><img className='img-categ mx-auto' width='80%' src={img1} alt='fot2' /> </div>
                    <button><div></div></button>
                </div>
                <div class="box box-2 col-md-4">
                    <div class="cover"><img className='img-categ mx-auto' width='80%' src={img2} alt='fot3' /></div>
                    <button><div></div></button>
                </div>
                <div class="box box-3 col-md-4">
                    <div class="cover"><img className='img-categ mx-auto' width='80%' src={img3} alt='fot1' /></div>
                    <button><div></div></button>
                </div>
            </div>

            <a href="https://dribbble.com/YancyMin" class="dr-url" target="_blank"><img class="dr" src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png" alt="" /></a>
        </div>
    </div>
  )
}

export default Categorie
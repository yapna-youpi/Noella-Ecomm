import React from 'react'

import fot1 from './assets/fot1.jpg'
import fot2 from './assets/fot2.jpg'
import fot3 from './assets/fot3.jpg'

import './featured.css'
function Featured() {
  return (
    <div id="featured">
        <div  className="container pb-5 mt-3">
            <h1 className='text-center pt-5' style={{color:"#212529"}}>Future Produits</h1>
            <h6 className='text-center'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br/>
                                        officia deserunt mollit anim id est laborum.</h6> 
                                        <div className="row mt-5">
                <div className="col-11 col-md-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src={fot1} class="card-img-top" alt="..." />
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">4700.00 Cfa</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">Gym Weight</a>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </p>
                            <p class="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>   

                <div className="col-11 col-md-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src={fot2} class="card-img-top" alt="..." />
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">8000.00 cfa</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">Cloud Nike Shoes</a>
                            <p class="card-text">
                            Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                            </p>
                            <p class="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div> 

                <div className="col-11 col-md-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src={fot3} class="card-img-top" alt="..." />
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">12000.00 cfa</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark"> Appareil Photo</a>
                            <p class="card-text">
                            Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                            </p>
                            <p class="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Featured
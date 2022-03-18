import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import img1 from './assets/ban1.jpg'
import img2 from './assets/ban2.jpg'
import img3 from './assets/ban3.jpg'
import './bootstrap-slide.css'

function SlideB() {
  return (
      <div id='hero' className='h-50'>
        <Carousel>
          <Carousel.Item>
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src={img1} alt=""/>
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left align-self-center">
                            <h1 class="h1 text-success"><b>TheWay</b> eCommerce</h1>
                            <h3 class="h2">Plate forme eCommerce pour vos pièces de rechanges.</h3>
                            <p>
                                Nous sommes le magasin le plus proche de notre aimable clientèle.<br/> 
                                Sis à la nouvelle route ecole de police tsinga.<br/>
                                Nous joindre <a rel="sponsored" class="text-success" href="https://api.whatsapp.com/send?phone=237653184406" target="_blank">Contact</a> 
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src={img2} alt=""/>
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left align-self-center">
                            <h1 class="h1 text-success"><b>TheWay</b> eCommerce</h1>
                            <h3 class="h2">Plate forme eCommerce pour vos pièces de rechanges.</h3>
                            <p>
                                Nous sommes le magasin le plus proche de notre aimable clientèle.<br/> 
                                Sis à la nouvelle route ecole de police tsinga.<br/>
                                Nous joindre <a rel="sponsored" class="text-success" href="https://api.whatsapp.com/send?phone=237653184406" target="_blank">Contact</a> 
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src={img3} alt=""/>
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left align-self-center">
                            <h1 class="h1 text-success"><b>TheWay</b> eCommerce</h1>
                            <h3 class="h2">Plate forme eCommerce pour vos pièces de rechanges.</h3>
                            <p>
                                Nous sommes le magasin le plus proche de notre aimable clientèle.<br/> 
                                Sis à la nouvelle route ecole de police tsinga.<br/>
                                Nous joindre <a rel="sponsored" class="text-success" href="https://api.whatsapp.com/send?phone=237653184406" target="_blank">Contact</a> 
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
  )
}

export default SlideB;

import React from 'react'
import { RiFacebookFill,RiTwitterFill,RiWhatsappFill,RiInstagramFill,RiLinkedinFill } from 'react-icons/ri'

import './footer.css'
import logo from './assets/logo-superkap.png'

function Footer() {

    return (
        <div id="footer">
            <div className="container">
                <div className="row footer-top">
                    <div className="col-12 col-md-4">
                        <h2 ><span className='colo' style={{color: "#59ab6e"}}>TheWay</span></h2>
                        <p className='footer-para'><i class="bi bi-geo-alt"></i>  yde-2 Ecole de Police</p>
                        <p className='footer-para'><i class="bi bi-phone"></i>  696 - 62 - 61 - 63</p>
                        <p className='footer-para'><i class="bi bi-envelope"></i>  TheShop@gmail.com</p>
                    </div>    
                    <div className="col-12 col-md-4">
                        <h2 ><span className='colo'>Products</span></h2>
                        <p className='footer-para'>Gros</p>
                        <p className='footer-para'>Sport Wear</p>
                        <p className='footer-para'>Men's Shoes</p>
                        <p className='footer-para'>Women Shoes</p>
                        <p className='footer-para'>Popular Dress</p>
                        <p className='footer-para'>Gym Accessories</p>
                        <p className='footer-para'>Sport Shoes</p>
                        <p className='footer-para'>Gros</p>
                    </div>    
                    <div className="col-12 col-md-4">
                        <h2 ><span className='colo'>Fhurter</span> Info</h2>
                        <p className='footer-para'>Home</p>
                        <p className='footer-para'>Abous us</p>
                        <p className='footer-para'>Shop Location</p>
                        <p className='footer-para'>Blog</p>
                        <p className='footer-para'>Contact</p>
                    </div>    
                </div>
                <div className="col footer-bottom d-flex justify-content-between">
                    <div>
                        <i className='footer-ico'><RiFacebookFill /></i><i className='footer-ico'><RiTwitterFill /></i><i className='footer-ico'><RiWhatsappFill /></i><i className='footer-ico'><RiInstagramFill/></i><i className='footer-ico'><RiLinkedinFill/></i>
                    </div>
                    <div >
                        <input className="footer-input" type="email" placeholder='Email Adress' required/>
                        <button className='footer-btn'>Subscribe</button>
                    </div>    
                </div>
            </div>
            <div className="container-fluid aside"><p className='devop'>Copyright © 2022 Company Name | Designed by <a href="#">BlackCoders</a></p></div>
        </div>
    )
}



export default Footer

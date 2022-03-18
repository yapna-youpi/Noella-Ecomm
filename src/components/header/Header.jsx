import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsTelephoneOutboundFill } from 'react-icons/bs'

import './header.css'
import logo from './assets/logo.png'

function Header() {
    const [visible, setVisible] = useState(false);
    const myref = React.createRef();

    let History = useHistory();
    const navLink = (route) =>{
        
        myref.current.classList.remove('mobile-nav-visible');   
        History.push(route);
        setVisible( v => !v);
    }

    const handleNav = e =>{
        setVisible( v => !v);
            myref.current.classList.remove('mobile-nav-visible');
        if(!visible){
            myref.current.classList.add('mobile-nav-visible');
            
        }
    }


    return (
        <div className="header">
            
             {/* <--======= Header ======= --*/}
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container  ">
                    <div className="row nav">

                        <div className="col-md-3 logo">
                           <h1><Link to='/'><span style={{color:"#59ab6e"}}>TheWay</span></Link></h1>
                        </div>

                        <div className="col-md-7 navig d-none d-md-block">
                            <ul className='navig-li'>
                                <li><Link to="/">Acceuil</Link></li>
                                <li><Link to="/Business">Boutique</Link></li>
                                <li><Link to="/Services">Services</Link></li>
                                <li><Link to="Blog">Blog</Link></li>
                                <li><Link to="/Help">Contact</Link></li>
                                
                            </ul>    
                        </div>
                        <div className="col-md-2 search">
                            <div class="navbar align-self-center d-flex">
                                <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                        <div class="input-group-text">
                                            <i class="fa fa-fw fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                                <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                    <i class="fa fa-fw fa-search text-dark mr-2"></i>
                                </a>
                                <a class="nav-icon position-relative text-decoration-none" href="#">
                                    <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                    <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                                </a>
                                <a class="nav-icon position-relative text-decoration-none" href="#">
                                    <i class="fa fa-fw fa-user text-dark mr-3"></i>
                                    <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                                </a>
                            </div>   
                        </div>
                    </div>
                        

                    {/* !--End .navbar --> */}
                </div>

                <div className="icon-contact d-none d-md-block">
                    <a href="https://api.whatsapp.com/send?phone=237653184406"><div className="icon-whatsapp"><i className="icone" > <RiWhatsappFill /></i> &nbsp;:&nbsp; 653 - 18 - 44 - 06</div></a>
                    <a href="tel:+237696626163"><div className="icon-whatsapp"><i className='icone'> <BsTelephoneOutboundFill /></i> &nbsp;:&nbsp; 653 - 18 - 44 - 06</div></a>
                </div>
            </header>
            <div className="container-fluid" style={{height:"80px"}}></div>
            { !visible?  (<i onClick={handleNav} className="bi bi-list mobile-nav-toggle"></i>)
                    :    (<i onClick={handleNav} className="bi bi-x mobile-nav-toggle"></i>)
            }
            
            <div id="nav-mobile" ref={myref} className="nav-mobile d-md-none d-block">
                    <div><div onClick={()=>navLink("/")}  className="col-12 lien">Acceuil</div></div>
                    <div><div onClick={()=>navLink("/Business")}  className="col-12 lien">Business</div></div>
                    <div><div onClick={()=>navLink("/Blog")}  className="col-12 lien">BLOG</div></div>
                    <div><div className="col-12 lien"><i className="bi bi-person-circle"></i> &nbsp; User</div></div>
                        <div><div onClick={()=>navLink("/Login")} className='liste'>Connexion</div></div>
                        <div><div onClick={()=>navLink("/SingUp")} className='liste'>S'inscrire</div></div>
                    <div><div onClick={()=>navLink("/Help")}  className="col-12 lien">Support</div></div>
                </div>
            {/* <!-- End Header --> */}
        </div>
    )
}

export default Header
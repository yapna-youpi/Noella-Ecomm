import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Header from '../components/header/Header.jsx'
import Blog from '../components/blog/Blog'
import Business from '../components/business/view/Business'
import Home from '../components/home/Home.jsx'
import Login from '../components/login/Login.jsx'
import Signup from '../components/signup/Signup.jsx'
import Help from '../components/help/Help.jsx'
import Footer from '../components/footer/Footer'
import FormulaireC from '../components/formulaires/views/formulaireC/FormulaireC'
import FormulaireI from '../components/formulaires/views/formulaireImmo/FormullaireImmo'

import BusinessDetail from '../components/business/components/businessDetail/BusinessDetail'

function Navigation() {
   
    return (
        <div>
            <Router>
                <Header />
                <Switch >
                    <Route exact path='/'  component={Home} />
                    <Route exact path='/Blog'  component={Blog} />
                    <Route exact path='/Business'  component={Business} />
                    <Route exact path='/Login'  component={Login} />
                    <Route exact path='/Signup'  component={Signup} />
                    <Route exact path='/Help'  component={Help} />
                    <Route exact path='/FormulaireC'  component={FormulaireC} />
                    <Route exact path='/FormulaireI'  component={FormulaireI} />
                    <Route exact path='/BusinessDetail'  component={BusinessDetail} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Navigation

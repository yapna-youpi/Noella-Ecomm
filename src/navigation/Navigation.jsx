import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Header from '../components/header/Header.jsx'
import Blog from '../components/home/Home.jsx'
import Business from '../components/business/view/Business'
import Academy from '../components/academy/Academy.jsx'
import Login from '../components/login/Login.jsx'
import Signup from '../components/signup/Signup.jsx'
import Help from '../components/help/Help.jsx'
import Footer from '../components/footer/Footer'
import ProduitDetail from '../components/immo/produitDetail/ProduitDetail.jsx'
import FormulaireC from '../components/formulaires/views/formulaireC/FormulaireC'
import FormulaireI from '../components/formulaires/views/formulaireImmo/FormullaireImmo'
import Details from '../components/immo2/views/details/Details'
import BusinessDetail from '../components/business/components/businessDetail/BusinessDetail'

function Navigation() {
   
    return (
        <div>
            <Router>
                <Header />
                <Switch >
                    <Route exact path='/'  component={Academy} />
                    <Route exact path='/Blog'  component={Blog} />
                    <Route exact path='/Business'  component={Business} />
                    <Route exact path='/Login'  component={Login} />
                    <Route exact path='/Signup'  component={Signup} />
                    <Route exact path='/ProduitDetail'  component={ProduitDetail} />
                    <Route exact path='/Help'  component={Help} />
                    <Route exact path='/immo2/details2/:id'  component={Details} />
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
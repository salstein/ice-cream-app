import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Flavors from './flavors'
import bar from '../images/bar.svg'
import bottom from '../images/bottom.svg'
import Dashboard from './dashboard'
import Flavor from './flavor'
import {NavLink} from 'react-router-dom'
import ViewTreat from './viewTreat'
import Cart from './cart'
import Summary from './summary'
import Notifications from './notification'
import Saved from './saved'

class MainComponent extends Component{
    state = {
        cart: [

        ],
        saved: [

        ],
        subtotal: '',
        deliveryFee: '',
        total: '',
        notificationName: []
    }
    setNotificationName = (name) => {
        let notificationName = [name, ...this.state.notificationName]
        this.setState({
            notificationName
        })
        console.log(this.state.notificationName)
    }
    updateCartSummary = (subtotal, deliveryFee, total) => {
        this.setState({
            subtotal,
            deliveryFee,
            total
        })
    }
    addToCart = (cart) => {
        let oldCart = [...this.state.cart];
        this.setState({
            cart: [cart, ...oldCart],
        })
    }
    addToSaved = (save) => {
        let oldSaved = [...this.state.saved];
        this.setState({
            saved: [...oldSaved, save],
        })
    }
    deleteFromCart = (cart) => {
        let newCart = this.state.cart.filter(cartItem => {
            return (
                cartItem.name !== cart.name
            )
            
        })
        this.setState({
            cart: newCart
        })
    }
    deleteFromSaved = (save) => {
        let newSaved = this.state.cart.filter(savedItem => {
            return (
                savedItem.name !== save.name
            )
            
        })
        this.setState({
            cart: newSaved
        })
    }
    quantityChange = () => {
        this.setState({
            
        })
    }
    render () {
        console.log(this.state)
        const name = this.props.name;
        const nameArray = [...name];
        const avatar = nameArray[0];
        return(
            <BrowserRouter>
                <div>
                    <img id='bar' src={bar} />
                    <div id='barContents'>
                        <div id='logo'>CreamStore</div>
                        <div id='avatar'>{avatar}</div>
                        <div id='hi'>Hi {name}! :)</div>
                    </div>
                    <img id='bottom' src={bottom} />
                    <div id='bottomNav'> 
                        <NavLink to='/app/dashboard'><div id='account'><svg xmlns="http://www.w3.org/2000/svg" width="20.813" height="20.813" viewBox="0 0 20.813 20.813">
                        <path id="Icon_material-account-circle" data-name="Icon material-account-circle" d="M13.406,3A10.406,10.406,0,1,0,23.813,13.406,10.41,10.41,0,0,0,13.406,3Zm0,3.122a3.122,3.122,0,1,1-3.122,3.122A3.118,3.118,0,0,1,13.406,6.122Zm0,14.777a7.493,7.493,0,0,1-6.244-3.351c.031-2.071,4.162-3.205,6.244-3.205s6.213,1.134,6.244,3.205A7.493,7.493,0,0,1,13.406,20.9Z" transform="translate(-3 -3)" fill="currentColor"/>
                        </svg></div></NavLink>
                        <NavLink to='/app/flavors'><div id='home'><svg xmlns="http://www.w3.org/2000/svg" width="28.542" height="22.195" viewBox="0 0 28.542 22.195">
                        <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M13.892,8.012,4.756,15.535v8.12a.793.793,0,0,0,.793.793l5.552-.014a.793.793,0,0,0,.789-.793V18.9a.793.793,0,0,1,.793-.793h3.171a.793.793,0,0,1,.793.793v4.739a.793.793,0,0,0,.793.8l5.55.015a.793.793,0,0,0,.793-.793V15.53L14.65,8.012A.6.6,0,0,0,13.892,8.012Zm14.43,5.114L24.179,9.711V2.848a.6.6,0,0,0-.595-.595H20.81a.6.6,0,0,0-.595.595v3.6L15.779,2.8a2.378,2.378,0,0,0-3.022,0L.215,13.125a.6.6,0,0,0-.079.837L1.4,15.5a.595.595,0,0,0,.838.081l11.655-9.6a.6.6,0,0,1,.758,0L26.3,15.58a.6.6,0,0,0,.837-.079l1.263-1.536a.595.595,0,0,0-.084-.839Z" transform="translate(0.001 -2.254)" fill="currentColor"/>
                        </svg>
                        </div></NavLink>
                        <NavLink to='/app/notification'>
                        <div id='notification'><svg xmlns="http://www.w3.org/2000/svg" width="17.423" height="21.725" viewBox="0 0 17.423 21.725">
                        <path id="Path_10" data-name="Path 10" d="M19.245,14.174V10.711A6.534,6.534,0,0,0,13.8,4.276V3.089a1.089,1.089,0,0,0-2.178,0V4.276a6.534,6.534,0,0,0-5.445,6.436v3.463A3.267,3.267,0,0,0,4,17.245v2.178a1.089,1.089,0,0,0,1.089,1.089H8.508a4.356,4.356,0,0,0,8.407,0h3.419a1.089,1.089,0,0,0,1.089-1.089V17.245a3.267,3.267,0,0,0-2.178-3.071ZM8.356,10.711a4.356,4.356,0,1,1,8.711,0v3.267H8.356ZM12.711,21.6a2.178,2.178,0,0,1-1.873-1.089h3.746A2.178,2.178,0,0,1,12.711,21.6Zm6.534-3.267H6.178V17.245a1.089,1.089,0,0,1,1.089-1.089H18.156a1.089,1.089,0,0,1,1.089,1.089Z" transform="translate(-4 -2)" fill="currentColor"/>
                        </svg>
                        </div></NavLink>
                    </div>
                        <Switch>
                            <Route path='/app/flavors' component={Flavors} />
                            <Route path='/app/dashboard' render={(props) => <Dashboard name={ name } {...props} /> }/>
                            <Route path='/app/flavor/:name' render={(props) => <Flavor {...props} /> }/>
                            <Route path='/app/treat/:name' render={(props) => <ViewTreat addToCart={ this.addToCart } addToSaved={ this.addToSaved } notification={this.setNotificationName} {...props} /> }/>
                            <Route path='/app/cart' render={(props) => <Cart cart={ this.state.cart } deleteFromCart={ this.deleteFromCart } updateCartSummary={this.updateCartSummary} {...props} /> }/>
                            <Route path='/app/saved' render={(props) => <Saved saved={ this.state.saved } deleteFromSaved={ this.deleteFromSaved } {...props} /> }/>
                            <Route path='/app/summary' render={(props) => <Summary state={ this.state } name={ name } {...props} />} />
                            <Route path='/app/notification' render={(props) => <Notifications newTreat={this.state.notificationName} {...props} />} />
                        </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default MainComponent
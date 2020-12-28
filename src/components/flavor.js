import React, { Component } from 'react'
import Search from './search'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


class Flavor extends Component {
    render () {
        const name = this.props.match.params.name;
        const flavors = this.props.flavorList
        const flavorList = flavors.length >= 1 ? (
                flavors.map(flavor => {
                return (
                    <div key={ flavor.id }>
                        <Link to={'/app/treat/' +flavor.name}>
                            <div className='eachFlavor'>
                                <div><img src={ flavor.picture } /></div>
                                <div id='flavorName'>{ flavor.name }</div>
                                <div id='flavorPrice'>${ flavor.price }</div>
                            </div>
                        </Link>
                    </div>
                )
                })
        ):(<div style={{textAlign: 'center', color: '#193155'}}><h3>Sorry, we currently do not have any treats for this flavor</h3></div>)
        // console.log(this.props.flavorList)
        // console.log(this.props)
        return (
            <div id='flavorComponent'>
                <div id='flavorContents'>
                    <Search />
                    <Link to='/app/flavors'>
                        <div id='flavorTop'>
                            <div id='flavorTopText'>{ this.props.flavor.flavor }</div>
                            <img id='flavorTopImage' src={ this.props.flavor.picture } />
                        </div>
                    </Link>
                    <div className='eachFlavors'>
                        { flavorList }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const name = ownProps.match.params.name;
    return {
        flavor: state.flavors.find(flavor => {
            return (
                flavor.flavor === name
            )
        }),
        flavorList: [
            ...state.treats.filter(treat => {
                return (
                    treat.flavor === name
                )
            }),
            ...state.treats.filter(treat => {
                return (
                    treat.flavor2 === name
                )
            })
        ]
    }
}

export default connect(mapStateToProps)(Flavor)
import React, { Component } from 'react'
import {connect} from 'react-redux'
import Search from './search'
import {Link} from 'react-router-dom'

class Flavors extends Component{
    render () {
        // console.log(this.props.flavors)
        const flavors = this.props.flavors;
        const flavorList = flavors.map(flavor => {
            return(
                <Link to={ '/app/flavor/' + flavor.flavor} key={flavor.id}>
                    <div className='flavor'>
                        <img src={flavor.picture} />
                        <div>{ flavor.flavor }</div>
                    </div>
                </Link>
            )
        })
        return (
            <div id='flavorComponent'>
                <div id='flavorContents'>
                    <Search />
                    <div id='flavors'>{ flavorList }</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        flavors: state.flavors
    }
}
export default connect(mapStateToProps)(Flavors)
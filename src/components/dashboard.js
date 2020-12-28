import React, { Component } from 'react'
import GoBack from './goBack'
import edit from '../images/edit.svg'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render () {
        let name = this.props.name;
        let nameList = [...name];
        let nameInit = nameList[0];
        const profileDetails = this.props.accountInfo;
        const profileNav = profileDetails.map(profileDetail => {
            return(
                <Link to={ profileDetail.link }>
                    <div className='profileNavs'>
                        <div className='profileNav'>
                            <div className='profileNavIcon'><img style={{backgroundColor: profileDetail.color}} src={profileDetail.icon}/></div>
                            <div className='profileNavText'>{profileDetail.text}</div>
                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <div id='dashboard'>
                <GoBack />
                <div id='profilePicture'>
                    <p>{ nameInit }</p>
                </div>
                <div id='profileName'>
                    <h3>{ this.props.name }</h3>
                </div>
                <div className='profileDetails'>
                    <h3>Billing Details</h3>
                    <h5>Address</h5>
                    <p>Lagos, Nigeria. Hallelujah Bus-stop, off Jesus Street.</p>
                    <h5>VISA</h5>
                    <p>1234     5678     3456     2456 </p>
                    <img src={edit} />
                </div>
                <div id='profileNav'>{ profileNav }</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        accountInfo: state.accountInfo
    }
}

export default connect(mapStateToProps)(Dashboard)
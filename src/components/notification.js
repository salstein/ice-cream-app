import React from 'react'
import GoBack from './goBack'

class Notifications extends React.Component {
    render () {
        let newTreats = this.props.newTreat;
        let newTreatList = newTreats.map(newTreat => {
            return (
                <div>
                    <li>You have successfully added <strong>{ newTreat }</strong> to your cart</li>
                </div>
            )
        })
        console.log(this.props.newTreat)
        return (
            <div className='component'>
                <GoBack />
                <h1>Notification</h1>
                <div>
                    <ol>
                        { newTreatList }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Notifications
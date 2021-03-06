import React, { Component } from 'react'
import './TicketDetails.css'

export default class TicketDetails extends Component {
    renderDetails = () => {
        const { ticket } = this.props

        return (
            <div key={ticket.id} className="details-container">
                <h1>{this.props.eventName}</h1>
                <h2>Ticket from {ticket.author}</h2>
                {this.props.risk()}
                <p className="price">{ticket.price === 0 ? 'FREE': ticket.price + 'EUR'}</p>
                {ticket.pictureUrl && <img className="ticket-image" src={ticket.pictureUrl} alt="ticket" />}
                <p>{ticket.description}</p>
                <button className="buy">BUY</button>
            </div>
        )
    }

    render() {
        const { ticket } = this.props

        return (
            <div>
                {!ticket && 'Loading...'}
                {ticket && this.renderDetails()}
            </div>
        )
    }
}
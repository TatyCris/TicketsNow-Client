import React, { Component } from 'react'

export default class Tickets extends Component {
    renderTickets = () => {
        return this.props.tickets.map(ticket => {
            return (
                // <Link to={`/events/${event.id}/tickets`} key={event.id}>
                    <div key={ticket.id} className="ticket-container">
                        <p>{ticket.userId}</p>
                        <p>{ticket.price}</p>
                        <p>{ticket.description}</p>
                    </div>
                // </Link >
            )
        })
    }

    render() {
        console.log('props Tickets', this.props);
        
        const { tickets } = this.props
        return (
            <div>
                {!tickets && 'Loading...'}
                {tickets && this.renderTickets()}
            </div>
        )
    }
}
import * as request from 'superagent'
import { host } from '../constants'

export const SET_TICKETS = 'SET_TICKETS'
export const ADD_TICKET = 'ADD_TICKET'
export const UPDATE_TICKET = 'UPDATE_TICKET'
export const SET_DETAILS = 'SET_DETAILS'

function setTickets(tickets) {
    return {
        type: SET_TICKETS,
        payload: tickets
    }
}

function addTicket(ticket) {
    return {
        type: ADD_TICKET,
        payload: ticket
    }
}

function updateTicket(ticket) {
    return {
        type: UPDATE_TICKET,
        payload: ticket
    }
}

function setDetails(details) {
    return {
        type: SET_DETAILS,
        payload: details
    }
}

export function getTickets(id) {
    return async function (dispatch) {
        request
            .get(`${host}/events/${encodeURIComponent(id)}/tickets`)
            .then(response => {
                dispatch(setTickets(response.body))
            })
            .catch(err => alert(err))
    }
}

export function postTicket(id, price, description, pictureUrl) {
    return async function (dispatch) {
        request
            .post(`${host}/events/${id}/tickets`)
            .set({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.token })
            .send({
                price: price,
                description: description,
                pictureUrl: pictureUrl
            })
            .then(response => {
                dispatch(addTicket(response.body))
            })
            .catch(err => alert(err))
    }
}

export function getDetails(id, ticketId) {
    return async function (dispatch) {
        request
            .get(`${host}/events/${encodeURIComponent(id)}/tickets/${encodeURIComponent(ticketId)}`)
            .then(response => {
                dispatch(setDetails(response.body))
            })
            .catch(err => alert(err))
    }
}

export function changeTicket(id, ticketId, price, description, pictureUrl) {
    return async function (dispatch) {
        request
            .put(`${host}/events/${encodeURIComponent(id)}/tickets/${encodeURIComponent(ticketId)}`)
            .set({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.token })
            .send({
                price: price,
                description: description,
                pictureUrl: pictureUrl
            })
            .then(response => {
                dispatch(updateTicket(response.body))
            })
            .catch(err => alert(err))
    }
}
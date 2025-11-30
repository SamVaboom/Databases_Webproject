// API SDK for the bike-sharing project. Each function calls a single backend endpoint
// and returns the parsed JSON response without managing UI or application state.

// AUTH
export async function login(username, password) {
    return await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(r => r.json());
}

export async function signup(username, password) {
    return await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(r => r.json());
}

// PERSONA
export async function getAllPersonas() {
    return await fetch('/api/persona').then(r => r.json());
}

export async function getPersonaById(id) {
    return await fetch(`/api/persona/${id}`).then(r => r.json());
}

export async function createPersona(data) {
    return await fetch('/api/persona', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function updatePersona(id, data) {
    return await fetch(`/api/persona/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function deletePersona(id) {
    return await fetch(`/api/persona/${id}`, {
        method: 'DELETE'
    }).then(r => r.json());
}

// SUBSCRIPTION
export async function getAllSubscriptions() {
    return await fetch('/api/subscription').then(r => r.json());
}

export async function getSubscriptionById(id) {
    return await fetch(`/api/subscription/${id}`).then(r => r.json());
}

export async function createSubscription(data) {
    return await fetch('/api/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function updateSubscription(id, data) {
    return await fetch(`/api/subscription/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function deleteSubscription(id) {
    return await fetch(`/api/subscription/${id}`, {
        method: 'DELETE'
    }).then(r => r.json());
}

export async function changeSubscription(data) {
    return await fetch('/api/subscription/change', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

// BIKE
export async function getAllBikes() {
    return await fetch('/api/bike').then(r => r.json());
}

export async function getBikeById(id) {
    return await fetch(`/api/bike/${id}`).then(r => r.json());
}

export async function createBike(data) {
    return await fetch('/api/bike', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function updateBike(id, data) {
    return await fetch(`/api/bike/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function deleteBike(id) {
    return await fetch(`/api/bike/${id}`, {
        method: 'DELETE'
    }).then(r => r.json());
}

// STATION
export async function getAllStations() {
    return await fetch('/api/station').then(r => r.json());
}

export async function getStationById(id) {
    return await fetch(`/api/station/${id}`).then(r => r.json());
}

export async function createStation(data) {
    return await fetch('/api/station', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function updateStation(id, data) {
    return await fetch(`/api/station/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function deleteStation(id) {
    return await fetch(`/api/station/${id}`, {
        method: 'DELETE'
    }).then(r => r.json());
}

// DISCOUNT
export async function getAllDiscounts() {
    return await fetch('/api/discount').then(r => r.json());
}

export async function getDiscountById(id) {
    return await fetch(`/api/discount/${id}`).then(r => r.json());
}

export async function createDiscount(data) {
    return await fetch('/api/discount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function updateDiscount(id, data) {
    return await fetch(`/api/discount/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function deleteDiscount(id) {
    return await fetch(`/api/discount/${id}`, {
        method: 'DELETE'
    }).then(r => r.json());
}

// PAYMENT
export async function getAllPayments() {
    return await fetch('/api/payment').then(r => r.json());
}

export async function getPaymentById(id) {
    return await fetch(`/api/payment/${id}`).then(r => r.json());
}

export async function createPayment(data) {
    return await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function updatePayment(id, data) {
    return await fetch(`/api/payment/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function deletePayment(id) {
    return await fetch(`/api/payment/${id}`, {
        method: 'DELETE'
    }).then(r => r.json());
}

// MAINTENANCE
export async function getAllMaintenance() {
    return await fetch('/api/maintenance').then(r => r.json());
}

export async function getMaintenanceById(id) {
    return await fetch(`/api/maintenance/${id}`).then(r => r.json());
}

export async function createMaintenance(data) {
    return await fetch('/api/maintenance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function updateMaintenance(id, data) {
    return await fetch(`/api/maintenance/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function deleteMaintenance(id) {
    return await fetch(`/api/maintenance/${id}`, {
        method: 'DELETE'
    }).then(r => r.json());
}

export async function completeMaintenance(id) {
    return await fetch(`/api/maintenance/${id}/complete`, {
        method: 'PUT'
    }).then(r => r.json());
}

// RIDE
export async function getAllRides() {
    return await fetch('/api/ride').then(r => r.json());
}

export async function getRideById(id) {
    return await fetch(`/api/ride/${id}`).then(r => r.json());
}

export async function createRide(data) {
    return await fetch('/api/ride', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function updateRide(id, data) {
    return await fetch(`/api/ride/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function deleteRide(id) {
    return await fetch(`/api/ride/${id}`, {
        method: 'DELETE'
    }).then(r => r.json());
}

export async function startRide(data) {
    return await fetch('/api/ride/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function endRide(data) {
    return await fetch('/api/ride/end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function submitRideFeedback(id, data) {
    return await fetch(`/api/ride/${id}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function getRidesByPersonaId(personaId) {
    return await fetch(`/api/ride/persona/${personaId}`).then(r => r.json());
}

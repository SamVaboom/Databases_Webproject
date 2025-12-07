// API SDK for the bike-sharing project plus UI logic for ui.html

async function request(url, options = {}) {
    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || `Request failed with status ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// AUTH
export async function login(username, password) {
    try {
        return await request('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function signup(username, password) {
    try {
        return await request('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
    } catch (error) {
        return { error: error.message };
    }
}

// PERSONA
export async function getAllPersonas() {
    try {
        return await request('/api/persona');
    } catch (error) {
        return { error: error.message };
    }
}

export async function getPersonaById(id) {
    try {
        return await request(`/api/persona/${id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export async function createPersona(data) {
    try {
        return await request('/api/persona', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function updatePersona(id, data) {
    try {
        return await request(`/api/persona/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function deletePersona(id) {
    try {
        return await request(`/api/persona/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        return { error: error.message };
    }
}

// SUBSCRIPTION
export async function getAllSubscriptions() {
    try {
        return await request('/api/subscription');
    } catch (error) {
        return { error: error.message };
    }
}

export async function getSubscriptionById(id) {
    try {
        return await request(`/api/subscription/${id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export async function createSubscription(data) {
    try {
        return await request('/api/subscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function updateSubscription(id, data) {
    try {
        return await request(`/api/subscription/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function deleteSubscription(id) {
    try {
        return await request(`/api/subscription/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function changeSubscription(data) {
    try {
        return await request('/api/subscription/change', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

// BIKE
export async function getAllBikes() {
    try {
        return await request('/api/bike');
    } catch (error) {
        return { error: error.message };
    }
}

export async function getBikeById(id) {
    try {
        return await request(`/api/bike/${id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export async function createBike(data) {
    try {
        return await request('/api/bike', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function updateBike(id, data) {
    try {
        return await request(`/api/bike/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function deleteBike(id) {
    try {
        return await request(`/api/bike/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        return { error: error.message };
    }
}

// STATION
export async function getAllStations() {
    try {
        return await request('/api/station');
    } catch (error) {
        return { error: error.message };
    }
}

export async function getStationById(id) {
    try {
        return await request(`/api/station/${id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export async function createStation(data) {
    try {
        return await request('/api/station', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function updateStation(id, data) {
    try {
        return await request(`/api/station/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function deleteStation(id) {
    try {
        return await request(`/api/station/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        return { error: error.message };
    }
}

// DISCOUNT
export async function getAllDiscounts() {
    try {
        return await request('/api/discount');
    } catch (error) {
        return { error: error.message };
    }
}

export async function getDiscountById(id) {
    try {
        return await request(`/api/discount/${id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export async function createDiscount(data) {
    try {
        return await request('/api/discount', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function updateDiscount(id, data) {
    try {
        return await request(`/api/discount/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function deleteDiscount(id) {
    try {
        return await request(`/api/discount/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        return { error: error.message };
    }
}

// PAYMENT
export async function getAllPayments() {
    try {
        return await request('/api/payment');
    } catch (error) {
        return { error: error.message };
    }
}

export async function getPaymentById(id) {
    try {
        return await request(`/api/payment/${id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export async function createPayment(data) {
    try {
        return await request('/api/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function updatePayment(id, data) {
    try {
        return await request(`/api/payment/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function deletePayment(id) {
    try {
        return await request(`/api/payment/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        return { error: error.message };
    }
}

// MAINTENANCE
export async function getAllMaintenance() {
    try {
        return await request('/api/maintenance');
    } catch (error) {
        return { error: error.message };
    }
}

export async function getMaintenanceById(id) {
    try {
        return await request(`/api/maintenance/${id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export async function createMaintenance(data) {
    try {
        return await request('/api/maintenance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function updateMaintenance(id, data) {
    try {
        return await request(`/api/maintenance/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function deleteMaintenance(id) {
    try {
        return await request(`/api/maintenance/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function completeMaintenance(id) {
    try {
        return await request(`/api/maintenance/${id}/complete`, {
            method: 'PUT'
        });
    } catch (error) {
        return { error: error.message };
    }
}

// RIDE
export async function getAllRides() {
    try {
        return await request('/api/ride');
    } catch (error) {
        return { error: error.message };
    }
}

export async function getRideById(id) {
    try {
        return await request(`/api/ride/${id}`);
    } catch (error) {
        return { error: error.message };
    }
}

export async function createRide(data) {
    try {
        return await request('/api/ride', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function updateRide(id, data) {
    try {
        return await request(`/api/ride/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function deleteRide(id) {
    try {
        return await request(`/api/ride/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function startRide(data) {
    try {
        return await request('/api/ride/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function endRide(data) {
    try {
        return await request('/api/ride/end', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function submitRideFeedback(id, data) {
    try {
        return await request(`/api/ride/${id}/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        return { error: error.message };
    }
}

export async function getRidesByPersonaId(personaId) {
    try {
        return await request(`/api/ride/persona/${personaId}`);
    } catch (error) {
        return { error: error.message };
    }
}

// ----------------------------
// UI LOGIC (runs in browser)
// ----------------------------
if (typeof document !== 'undefined') {
    const contentBox = document.querySelector('#content-box');
    const startRideButton = document.querySelector('#start-ride');
    const endRideButton = document.querySelector('#end-ride');
    const navButtons = document.querySelectorAll('.header-buttons button');
    const mapContainer = document.getElementById('mapbox');

    let mapInstance = null;
    let currentPersona = null;
    let bikesCache = [];
    let stationMarkers = {};




    function getPersonaId() {
        return Number(sessionStorage.getItem('personaId'));
    }


    function showMessage(html) {
        contentBox.innerHTML = html;
    }

    function showError(error) {
        contentBox.innerHTML = `<div class="error">${error}</div>`;
    }

    function updateRideButtons() {
        const currentRide = sessionStorage.getItem('currentRide');
        if (currentRide) {
            startRideButton.style.display = 'none';
            endRideButton.style.display = 'inline-block';
        } else {
            startRideButton.style.display = 'inline-block';
            endRideButton.style.display = 'inline-block';
        }
    }

    async function loadPersona() {
        try {
            let persona = await getPersonaById(getPersonaId());
            if (persona && !persona.error) {
                currentPersona = persona;
            }
        } catch (error) {
            showError(error.message);
        }
    }

    function renderHeaderListeners() {
        navButtons[0].addEventListener('click', renderHome);
        navButtons[1].addEventListener('click', renderStationsPage);
        navButtons[2].addEventListener('click', renderAccountPage);
        navButtons[3].addEventListener('click', renderSettingsPage);
        navButtons[4].addEventListener('click', () => window.location.href = 'login.html');
    }

    function initMap() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGF3aXgxMCIsImEiOiJjamJlOGE1bmcyZ2V5MzNtcmlyaWRzcDZlIn0.ZRQ73zzVxwcADIPvsqB6mg';
        const defaultCoords = [7.2472, 47.1372];
        mapInstance = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: defaultCoords,
            zoom: 13
        });

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: false
        });
        mapInstance.addControl(geocoder);
        mapInstance.on('load', async () => {
            await renderStationsOnMap();
            locateUser();
        });
    }

    function showUserLocation(lng, lat) {

        const point = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [lng, lat]
            }
        };

        // Quelle aktualisieren, wenn sie schon existiert
        if (mapInstance.getSource("user-location")) {
            mapInstance.getSource("user-location").setData(point);
            return;
        }

        // Quelle erstellen
        mapInstance.addSource("user-location", {
            type: "geojson",
            data: point
        });

        // 🔵 Kreis (User Position)
        mapInstance.addLayer({
            id: "user-circle",
            type: "circle",
            source: "user-location",
            paint: {
                "circle-radius": 14,
                "circle-color": "#4A90E2",      // Blau
                "circle-opacity": 0.45,
                "circle-stroke-width": 3,
                "circle-stroke-color": "#005BBB" // Dunkler rand
            }
        });

        // ➤ Pfeil als Symbol
       /* mapInstance.addLayer({
            id: "user-arrow",
            type: "symbol",
            source: "user-location",
            layout: {
                "text-field": "➤",
                "text-size": 18,
                "text-offset": [0, 0.1],
                "text-rotate": 0,   // <- später kannst du hier Kompassrotation hinzufügen
            },
            paint: {
                "text-color": "#003F7F"
            }
        });*/
    }

    async function locateUser() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            mapInstance.setCenter([longitude, latitude]);
            mapInstance.setZoom(14);

            showUserLocation(longitude, latitude);

        }, (error) => {
            console.warn('Geolocation failed', error.message);
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    }
}


    async function renderStationsOnMap() {
        try {
            const stations = await getAllStations();
            bikesCache = await getAllBikes();

            if (stations.error || bikesCache.error) {
                showError(stations.error || bikesCache.error);
                return;
            }

            stations.forEach(st => {
                const bikesCount = bikesCache.filter(b => b.station_id === st.station_id).length;

                // Marker speichern!
                const marker = new mapboxgl.Marker()
                    .setLngLat([st.longitude, st.latitude])
                    .setPopup(new mapboxgl.Popup({ offset: 12 }).setHTML(`
                    <div style="font-family:Arial; min-width:180px">
                        <h3 style="margin:0 0 6px 0; font-size:16px;">${st.station_street}</h3>
                        <div style="font-size:14px; color:#444;">
                            <strong>ID:</strong> ${st.station_id}<br>
                            <strong>Kapazität:</strong> ${st.capacity}<br>
                            <strong>Verfügbare Bikes:</strong> ${bikesCount}
                        </div>
                    </div>
                `))
                    .addTo(mapInstance);

                // jetzt funktioniert es
                stationMarkers[st.station_id] = marker;
            });

        } catch (error) {
            showError(error.message);
        }
    }


    async function renderHome() {
        try {
            await loadPersona();
            updateRideButtons();
            let html = '<p>Welcome to BobRide! Start or end your ride.</p>';
            if (sessionStorage.getItem('currentRide')) {
                html += `<p>Current ride in progress (ID: ${sessionStorage.getItem('currentRide')}).</p>`;
            }
            if (currentPersona && currentPersona.subscription_id === 1) {
                const maintenance = await getAllMaintenance();
                if (!maintenance.error) {
                    html += '<h3>Maintenance cases</h3>';
                    html += '<ul>' + maintenance.map(m => `
                        <li>
                            <strong>ID:</strong> ${m.maintanance_id} | <strong>Bike:</strong> ${m.bike_id} | <strong>Status:</strong> ${m.fix_complete ? 'closed' : 'open'}<br>
                            Feedback: ${m.issue_report || 'N/A'}
                            ${m.fix_complete ? '' : ` <button data-maint="${m.maintanance_id}" class="resolve-btn">Resolve</button>`}
                        </li>`).join('') + '</ul>';
                }
            }
            showMessage(html);
            document.querySelectorAll('.resolve-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    try {
                        const id = btn.getAttribute('data-maint');
                        const res = await completeMaintenance(id);
                        if (res.error) {
                            showError(res.error);
                            return;
                        }
                        renderHome();
                    } catch (error) {
                        showError(error.message);
                    }
                });
            });
        } catch (error) {
            showError(error.message);
        }
    }

    async function renderStationsPage() {
        try {
            const stations = await getAllStations();
            bikesCache = await getAllBikes();
            if (stations.error) {
                showError(stations.error);
                return;
            }
            let html = `
                 <h3>Stations</h3>
            <style>
                .station-card {
                    border: 1px solid #ccc;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 6px;
                    background: #f8f8f8;
                }
                .station-card h4 {
                    margin: 0 0 8px 0;
                }
            </style>
        `;
            html += stations.map(st => {
                const bikesCount = bikesCache.filter(b => b.station_id === st.station_id).length;

                return `
            <div class="station-card" data-id="${st.station_id}">
            <h4>${st.station_street}</h4>
            <div><strong>Capacity:</strong> ${st.capacity}</div>
            <div><strong>Current Bikes:</strong> ${bikesCount}</div>
            </div>

            `;
            }).join('');

            showMessage(html);


            document.querySelectorAll('.station-card').forEach(card => {

                card.addEventListener('mouseenter', () => {
                    card.style.backgroundColor = "#91919193";   // Farbe beim Hover
                });

                card.addEventListener('mouseleave', () => {
                    card.style.backgroundColor = "";          // zurücksetzen
                });

                card.addEventListener('click', () => {
                    const id = card.getAttribute('data-id');
                    const marker = stationMarkers[id];

                    if (marker) {
                        const lngLat = marker.getLngLat();

                        mapInstance.flyTo({
                            center: lngLat,
                            zoom: 15,
                            speed: 1.2
                        });

                        marker.togglePopup();
                    }
                });
            });

        } catch (error) {
            showError(error.message);
        }
    }

    function renderAccountDetails(persona, subscriptionName) {

        function extractDate(isoString) {
            return isoString.split("T")[0];
        }

        const fields = {
            Firstname: persona.firstname,
            Lastname: persona.lastname,
            Email: persona.email,
            Phone: persona.phonenum,
            Address: persona.adress,
            City: persona.city,
            Zipcode: persona.zipcode,
            Subscription: subscriptionName,
            Paymentmethod: persona.payment_method,
            Created: extractDate(persona.account_created)
        };
        let html = '<h3>Account</h3>';
        html += '<div>' + Object.entries(fields).map(([key, value]) => `<div><strong>${key}:</strong> ${value ?? ''}</div>`).join('') + '</div>';
        html += '<button id="edit-account">Edit Account</button> <button id="delete-account">Delete Account</button>';
        showMessage(html);
        document.getElementById('edit-account').addEventListener('click', renderAccountEditForm);
        document.getElementById('delete-account').addEventListener('click', deleteAccount);
    }

    async function renderAccountPage() {
        try {
            await loadPersona();
            if (!currentPersona) {
                showError('Unable to load account');
                return;
            }
            const subscription = await getSubscriptionById(currentPersona.subscription_id);
            const subscriptionName = subscription && !subscription.error ? subscription.subscription_name : '';
            renderAccountDetails(currentPersona, subscriptionName);
        } catch (error) {
            showError(error.message);
        }
    }

    function renderAccountEditForm() {
        const formHtml = `
            <h3>Edit Account</h3>
            <form id="account-form">
                <label>Email</label><br><input type="email" name="email" value="${currentPersona.email}" required><br>
                <label>Password</label><br><input type="text" name="password" value="${currentPersona.password}" required><br>
                <label>Address</label><br><input type="text" name="adress" value="${currentPersona.adress}" required><br>
                <label>City</label><br><input type="text" name="city" value="${currentPersona.city}" required><br>
                <label>Zipcode</label><br><input type="number" name="zipcode" value="${currentPersona.zipcode}" required><br>
                <button type="submit">Save</button>
            </form>
            <button id="cancel-edit">Cancel</button>
        `;
        showMessage(formHtml);
        document.getElementById('account-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const payload = {
                email: formData.get('email'),
                password: formData.get('password'),
                adress: formData.get('adress'),
                city: formData.get('city'),
                zipcode: Number(formData.get('zipcode')),
            };
            try {
                const res = await updatePersona(getPersonaId(), payload);
                if (res.error) {
                    showError(res.error);
                    return;
                }
                await renderAccountPage();
            } catch (error) {
                showError(error.message);
            }
        });
        document.getElementById('cancel-edit').addEventListener('click', renderAccountPage);
    }

    async function deleteAccount() {
        if (!confirm('Delete your account?')) return;
        try {
            const res = await deletePersona(getPersonaId());
            if (res.error) {
                showError(res.error);
                return;
            }
            window.location.href = 'login.html';
        } catch (error) {
            showError(error.message);
        }
    }

    async function renderSettingsPage() {
        try {
            await loadPersona();
            const subs = await getAllSubscriptions();
            if (!currentPersona || subs.error) {
                showError(subs.error || 'Unable to load settings');
                return;
            }
            const currentSub = subs.find(s => s.subscription_id === currentPersona.subscription_id);
            let html = `<h3>Store</h3><div>Current subscription: ${currentSub ? currentSub.subscription_name : ''}</div>`;
            html += '<h4>Available subscriptions</h4>';
            html += '<ul>' + subs.filter(s => s.subscription_id !== 1).map(s => `<li>${s.subscription_name}</li>`).join('') + '</ul>';
            html += '<button id="change-sub">Change subscription</button>';
            showMessage(html);
            document.getElementById('change-sub').addEventListener('click', () => renderSubscriptionForm(subs));
        } catch (error) {
            showError(error.message);
        }
    }

    function renderSubscriptionForm(subs) {
        const formHtml = `
            <h3>Change Subscription</h3>
            <form id="sub-form">
                <label>Subscription</label><br>
                <select name="subscription_id">${subs.filter(s => s.subscription_id !== 1).map(s => `<option value="${s.subscription_id}">${s.subscription_name}</option>`).join('')}</select><br>
                <label>Payment method</label><br>
                <select name="payment_method">
                    <option value="creditcard">creditcard</option>
                    <option value="twint">twint</option>
                    <option value="invoice">invoice</option>
                </select><br>
                <label>Discount code</label><br>
                <input type="text" name="discount" placeholder="Enter code"><br>
                <div id="price-info"></div>
                <div id="discount-info"></div>
                <button type="button" id="apply-discount">Apply discount</button>
                <button type="submit">Confirm</button>
            </form>
            <button id="cancel-sub">Cancel</button>
        `;
        showMessage(formHtml);
        const priceInfo = document.getElementById('price-info');
        const discountInfo = document.getElementById('discount-info');

        const updatePriceDisplay = async () => {
            const subId = Number(document.querySelector('select[name="subscription_id"]').value);
            const sub = subs.find(s => s.subscription_id === subId);
            if (sub) priceInfo.innerText = `Price: ${sub.price_per_month} CHF`;
        };
        updatePriceDisplay();
        document.querySelector('select[name="subscription_id"]').addEventListener('change', updatePriceDisplay);

        document.getElementById('apply-discount').addEventListener('click', async () => {
            const code = document.querySelector('input[name="discount"]').value.trim();
            if (!code) return;
            try {
                const discounts = await getAllDiscounts();
                if (discounts.error) {
                    discountInfo.innerText = discounts.error;
                    return;
                }
                const match = discounts.find(d => d.discount_code.toLowerCase() === code.toLowerCase());
                if (!match) {
                    discountInfo.innerText = 'Invalid code';
                    return;
                }
                if (match.num_of_use === 0) {
                    discountInfo.innerText = 'Discount expired';
                    return;
                }
                const subId = Number(document.querySelector('select[name="subscription_id"]').value);
                const sub = subs.find(s => s.subscription_id === subId);
                const discounted = (sub.price_per_month * (1 - match.discount_per / 100)).toFixed(2);
                discountInfo.innerText = `Discount applied: new price ${discounted} CHF`;
                await updateDiscount(match.discount_id, { num_of_use: match.num_of_use - 1 });
            } catch (error) {
                discountInfo.innerText = error.message;
            }
        });

        document.getElementById('sub-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const payload = {
                subscription_id: Number(formData.get('subscription_id')),
                payment_method: formData.get('payment_method')
            };
            try {
                const res = await updatePersona(getPersonaId(), payload);
                if (res.error) {
                    showError(res.error);
                    return;
                }
                await renderSettingsPage();
            } catch (error) {
                showError(error.message);
            }
        });
        document.getElementById('cancel-sub').addEventListener('click', renderSettingsPage);
    }

    async function startRideFlow() {
        try {
            const stations = await getAllStations();
            if (stations.error) {
                showError(stations.error);
                return;
            }
            const list = stations.map(st => `<li><button class="station-select" data-id="${st.station_id}" data-street="${st.station_street}">${st.station_street}</button></li>`).join('');
            showMessage(`<h3>Select start station</h3><ul>${list}</ul>`);
            document.querySelectorAll('.station-select').forEach(btn => {
                btn.addEventListener('click', async () => {
                    try {
                        const stationId = Number(btn.getAttribute('data-id'));
                        const street = btn.getAttribute('data-street');
                        const res = await startRide({ persona_id: getPersonaId(), station_id: stationId });
                        if (res.error) {
                            showError(res.error);
                            return;
                        }
                        sessionStorage.setItem('currentRide', res.ride_id);
                        updateRideButtons();
                        showMessage(`Ride started at ${street} with bike ${res.bike_id}`);
                    } catch (error) {
                        showError(error.message);
                    }
                });
            });
        } catch (error) {
            showError(error.message);
        }
    }

    async function endRideFlow() {
        const currentRide = sessionStorage.getItem('currentRide');
        if (!currentRide) {
            showMessage('No active ride to end.');
            return;
        }
        try {
            const stations = await getAllStations();
            if (stations.error) {
                showError(stations.error);
                return;
            }
            const list = stations.map(st => `<li><button class="station-return" data-id="${st.station_id}">${st.station_street}</button></li>`).join('');
            showMessage(`<h3>Select return station</h3><ul>${list}</ul>`);
            document.querySelectorAll('.station-return').forEach(btn => {
                btn.addEventListener('click', () => showRatingForm(Number(btn.getAttribute('data-id'))));
            });
        } catch (error) {
            showError(error.message);
        }
    }

    function showRatingForm(stationId) {
        const ratingHtml = `
            <h3>Rate your ride</h3>
            <div id="rating-options">${[1, 2, 3, 4, 5].map(r => `<label><input type="radio" name="rating" value="${r}" ${r === 5 ? 'checked' : ''}>${r} star</label>`).join('<br>')}</div>
            <div id="issue-box" style="display:none;"><label>Describe the issue</label><br><textarea id="issue-text"></textarea></div>
            <button id="submit-end">Submit</button>
        `;
        showMessage(ratingHtml);
        const ratingInputs = document.querySelectorAll('input[name="rating"]');
        ratingInputs.forEach(input => input.addEventListener('change', () => {
            const rating = Number(document.querySelector('input[name="rating"]:checked').value);
            document.getElementById('issue-box').style.display = rating <= 2 ? 'block' : 'none';
        }));
        document.getElementById('submit-end').addEventListener('click', async () => {
            const rating = Number(document.querySelector('input[name="rating"]:checked').value);
            const comment = document.getElementById('issue-text').value.trim();
            if (rating <= 2 && !comment) {
                showError('Describe the issue');
                return;
            }
            await finalizeRide(stationId, rating, comment);
        });
    }

    async function finalizeRide(stationId, rating, comment) {
        const rideId = sessionStorage.getItem('currentRide');
        try {
            const endRes = await endRide({ ride_id: Number(rideId), station_id: stationId });
            if (endRes.error) {
                showError(endRes.error);
                return;
            }
            const feedbackRes = await submitRideFeedback(rideId, { rating, comment });
            if (feedbackRes && feedbackRes.error) {
                showError(feedbackRes.error);
                return;
            }
            if (rating <= 2) {
                await createMaintenance({
                    bike_id: endRes.bike_id,
                    ride_id: rideId,
                    issue_report: comment,
                    last_customer: getPersonaId()
                });
            }
            if (currentPersona && currentPersona.subscription_id === 2) {
                showMessage(`Your ride cost: ${endRes.cost} CHF`);
            } else {
                showMessage('Ride ended successfully.');
            }
            sessionStorage.removeItem('currentRide');
            updateRideButtons();
            await renderHome();
        } catch (error) {
            showError(error.message);
        }
    }

    function bindRideButtons() {
        startRideButton.addEventListener('click', startRideFlow);
        endRideButton.addEventListener('click', endRideFlow);
    }

    async function bootstrap() {
        renderHeaderListeners();
        bindRideButtons();
        updateRideButtons();
        initMap();
        await renderHome();
    }

    bootstrap();
}

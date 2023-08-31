// script.js
let map;
let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -1.831239, lng: -78.183406 }, // Coordenadas de Ecuador
        zoom: 7,
    });
}

function addMarker(location) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
    markers.push(marker);
}

document.getElementById("addGasStation").addEventListener("click", () => {
    const lat = parseFloat(prompt("Ingrese la latitud de la gasolinera:"));
    const lng = parseFloat(prompt("Ingrese la longitud de la gasolinera:"));
    const location = { lat, lng };
    addMarker(location);
});

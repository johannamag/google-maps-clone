mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9oYW5uYW1hZyIsImEiOiJja2hjY3N5bXowZ2tzMnNvZ3NiMm9hZHAyIn0.CHbGnXDMeh4MG2-QDagFiQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });
}

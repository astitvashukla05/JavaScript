'use strict';

// DOM ELEMENTS

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Workouts

class Workouts {
  #date = new Date();
  #id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
}
class Running extends Workouts {
  constructor(coords, distance, duration, name, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.name = name;
    this.calcPace();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workouts {
  constructor(coords, distance, duration, name, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this.name = name;
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
const run1 = new Running([12, 24], 20, 50, 'astitva', 200);
const cycle1 = new Cycling([12, 24], 20, 50, 'astitvaShu', 100);
console.log(run1);
console.log(cycle1);
// APP CLASS

class App {
  // Private fields
  #map;
  #mapEvent;

  constructor() {
    // Get user's current location
    this._getPosition();

    // Attach event listeners
    form.addEventListener('submit', this._newWorkOut.bind(this));
    inputType.addEventListener(
      'change',
      this._toggleElevationFeilds.bind(this)
    );
  }

  // Geolocation: Get current position

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this), // Success callback
      function () {
        console.log('Unable to fetch location'); // Error callback
      }
    );
  }

  // Load map at current position

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    // Initialize Leaflet map
    this.#map = L.map('map').setView(coords, 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Add marker at user's location
    L.marker(coords).addTo(this.#map).bindPopup('Your Location').openPopup();

    // Handle clicks on the map
    this.#map.on('click', this._showForm.bind(this));
  }

  // Show input form on map click
  _showForm(mapE) {
    this.#mapEvent = mapE; // Save clicked location
    form.classList.remove('hidden'); // Show form
    inputDistance.focus(); // Focus first input field
    console.log('Map clicked:', mapE); // Debug log
  }

  // Handle form submit -> Add new workout marker
  _newWorkOut(e) {
    e.preventDefault(); // Prevent page reload

    // Get clicked coordinates
    const { lat, lng } = this.#mapEvent.latlng;
    const newCoords = [lat, lng];

    // Add marker with popup at clicked location
    L.marker(newCoords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 100,
          maxWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: 'cycling-popup',
        })
      )
      .setPopupContent('Workout added!')
      .openPopup();

    // Clear input fields after submit
    this._clearFields();
  }

  // Reset form inputs

  _clearFields() {
    inputType.value = 'running'; // Reset select to default
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        ''; // Clear numeric inputs
  }

  // Toggle form fields (running vs cycling)

  _toggleElevationFeilds() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
}

// INITIALIZE APP
const app = new App();

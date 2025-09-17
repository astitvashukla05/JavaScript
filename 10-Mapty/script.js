'use strict';

// ==========================================
// DOM ELEMENTS
// ==========================================
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// ==========================================
// WORKOUT CLASSES
// ==========================================

// Base Workout class
class Workouts {
  #date = new Date();
  #id = (Date.now() + '').slice(-10); // unique ID

  constructor(coords, distance, duration) {
    this.distance = distance; // in km
    this.duration = duration; // in min
    this.coords = coords; // [lat, lng]
  }
}

// Running Workout
class Running extends Workouts {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence; // steps per minute
    this.calcPace(); // pace = min/km
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

// Cycling Workout
class Cycling extends Workouts {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain; // meters climbed
    this.calcSpeed(); // speed = km/h
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// ==========================================
// APP CLASS
// ==========================================
class App {
  // Private fields
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user's location
    this._getPosition();

    // Event listeners
    form.addEventListener('submit', this._newWorkOut.bind(this));
    inputType.addEventListener(
      'change',
      this._toggleElevationFeilds.bind(this)
    );
  }

  // ----------------------------------------
  // Get current position via Geolocation API
  // ----------------------------------------
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this), // Success
      function () {
        console.log('Unable to fetch location'); // Failure
      }
    );
  }

  // ----------------------------------------
  // Load Leaflet map at current position
  // ----------------------------------------
  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    // Create map
    this.#map = L.map('map').setView(coords, 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Marker at current location
    L.marker(coords).addTo(this.#map).bindPopup('Your Location').openPopup();

    // Handle clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  // ----------------------------------------
  // Show input form when user clicks on map
  // ----------------------------------------
  _showForm(mapE) {
    this.#mapEvent = mapE; // Save clicked coordinates
    form.classList.remove('hidden'); // Show the form
    inputDistance.focus(); // Focus distance input
    console.log('Map clicked:', mapE); // Debug log
  }

  // ----------------------------------------
  // Handle form submit -> Create workout
  // ----------------------------------------
  _newWorkOut(e) {
    e.preventDefault(); // Stop page reload

    // Validation helpers
    const allpositives = (...inputs) => inputs.every(e => e >= 0);
    const allNumbers = (...inputs) => inputs.every(e => Number.isFinite(e));

    // Get form data
    const ActivityType = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    const newCoords = [lat, lng];

    let workout;

    // ------------------------
    // If Running -> create obj
    // ------------------------
    if (inputType.value === 'running') {
      const cadence = +inputCadence.value;

      if (
        !allpositives(distance, duration, cadence) ||
        !allNumbers(distance, duration, cadence)
      ) {
        return alert(`Pls enter valid values`);
      } else {
        workout = new Running(newCoords, distance, duration, cadence);
        this.#workouts.push(workout);
      }
    }

    // ------------------------
    // If Cycling -> create obj
    // ------------------------
    if (inputType.value === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !allpositives(distance, duration) ||
        !allNumbers(distance, duration, elevation)
      ) {
        return alert(`Pls enter valid values`);
      } else {
        workout = new Cycling(newCoords, distance, duration, elevation);
        this.#workouts.push(workout);
      }
    }

    console.log(workout); // Debug log
    this._renderMarkOnMap(workout);
  }

  // ----------------------------------------
  // Reset input fields
  // ----------------------------------------
  _clearFields() {
    inputType.value = 'running'; // Reset dropdown
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        ''; // Reset numbers
    form.classList.add('hidden');
  }

  // ----------------------------------------
  // Toggle cadence/elevation fields
  // ----------------------------------------
  _toggleElevationFeilds() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  // ------------------------
  // Render workout on the map
  // ------------------------
  _renderMarkOnMap(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 100,
          maxWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(workout.type)
      .openPopup();

    // Clear inputs
    this._clearFields();
  }
}

// ==========================================
// INITIALIZE APP
// ==========================================
const app = new App();

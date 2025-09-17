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
class Workouts {
  #date = new Date();
  id = (Date.now() + '').slice(-10); // unique ID

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  // Set description (e.g., "Running on June 12")
  setDesc() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.#date.getMonth()]
    } ${this.#date.getDate()}`;
  }
}

class Running extends Workouts {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence; // steps per minute
    this.calcPace(); // pace = min/km
    this.setDesc();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workouts {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain; // meters climbed
    this.calcSpeed(); // speed = km/h
    this.setDesc();
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
    // Load position + data
    this._getPosition();
    this._getLocalStorage();

    // Event listeners
    form.addEventListener('submit', this._newWorkOut.bind(this));
    inputType.addEventListener(
      'change',
      this._toggleElevationFields.bind(this)
    );
    containerWorkouts.addEventListener('click', this._moveToMarkUP.bind(this));
  }

  // ----------------------------------------
  // Geolocation + Map
  // ----------------------------------------
  _getPosition() {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () =>
      console.log('Unable to fetch location')
    );
  }

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

    // Current location marker
    L.marker(coords).addTo(this.#map).bindPopup('Your Location').openPopup();

    // Map click -> show form
    this.#map.on('click', this._showForm.bind(this));

    // Render existing workouts on map
    this.#workouts.forEach(workout => this._renderMarkOnMap(workout));
  }

  // ----------------------------------------
  // Form handling
  // ----------------------------------------
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _clearFields() {
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
    form.classList.add('hidden');
  }

  _toggleElevationFields() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // ----------------------------------------
  // Create & Render Workouts
  // ----------------------------------------
  _newWorkOut(e) {
    e.preventDefault();

    const allPositives = (...inputs) => inputs.every(i => i >= 0);
    const allNumbers = (...inputs) => inputs.every(i => Number.isFinite(i));

    // Form data
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    const coords = [lat, lng];

    let workout;

    // Running
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !allPositives(distance, duration, cadence) ||
        !allNumbers(distance, duration, cadence)
      )
        return alert('Please enter valid values');

      workout = new Running(coords, distance, duration, cadence);
    }

    // Cycling
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !allPositives(distance, duration) ||
        !allNumbers(distance, duration, elevation)
      )
        return alert('Please enter valid values');

      workout = new Cycling(coords, distance, duration, elevation);
    }

    // Save & render
    this.#workouts.push(workout);
    this._renderMarkOnMap(workout);
    this._renderWorkoutLists(workout);
    this._setLocalStorage();
    this._clearFields();
  }

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
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkoutLists(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id=${workout.id}>
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>`;

    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>`;
    }

    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>`;
    }

    html += `</li>`;
    form.insertAdjacentHTML('afterend', html);
  }

  // ----------------------------------------
  // Navigation + Storage
  // ----------------------------------------
  _moveToMarkUP(e) {
    const element = e.target.closest('.workout');
    if (!element) return;

    const workout = this.#workouts.find(
      w => w.id === element.getAttribute('data-id')
    );
    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: { duration: 2 },
    });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;

    this.#workouts = data.map(obj =>
      obj.type === 'running'
        ? new Running(obj.coords, obj.distance, obj.duration, obj.cadence)
        : new Cycling(obj.coords, obj.distance, obj.duration, obj.elevationGain)
    );

    this.#workouts.forEach(workout => this._renderWorkoutLists(workout));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

// ==========================================
// INITIALIZE APP
// ==========================================
const app = new App();

import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data, render = true) {
    this._data = data;
    if (!this._data || (Array.isArray(this._data) && this._data.length === 0)) {
      return this.renderError();
    }
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

  update(data) {
    this._data = data;
    const markup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(markup);
    const newEls = Array.from(newDOM.querySelectorAll('*'));
    const currEls = Array.from(this._parentEl.querySelectorAll('*'));

    newEls.forEach((newEl, i) => {
      const curEl = currEls[i];

      // Update changed text
      if (
        !curEl.isEqualNode(newEl) &&
        newEl.firstChild &&
        newEl.firstChild.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Update changed attributes
      Array.from(newEl.attributes).forEach(attr => {
        curEl.setAttribute(attr.name, attr.value);
      });
    });
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
        <h3>Fetching your Recipe</h3>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errMess || 'Something went wrong!') {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <span>
          <p>${message}</p>
        </span>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = 'Success') {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <span>
          <p>${message}</p>
        </span>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}

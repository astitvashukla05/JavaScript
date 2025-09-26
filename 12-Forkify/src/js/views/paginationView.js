import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    const totalPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // First page & more pages available
    if (this._data.page === 1 && totalPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next" data-goto="${
          this._data.page + 1
        }">
          <span>Page ${this._data.page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Middle pages
    if (this._data.page < totalPages) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${
          this._data.page - 1
        }">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this._data.page - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next" data-goto="${
          this._data.page + 1
        }">
          <span>Page ${this._data.page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Last page
    if (this._data.page === totalPages && totalPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${
          this._data.page - 1
        }">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this._data.page - 1}</span>
        </button>
      `;
    }

    return '';
  }

  addHandler(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goTo = +btn.dataset.goto;
      handler(goTo);
    });
  }
}

export default new PaginationView();

class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const value = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return value;
  }

  addHandler(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
}

export default new SearchView();

class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    return this._parentEl.querySelector('.search__field').value;
  }

  _clearInput() {
    const query = (this._parentEl.querySelector('.search__field').value = '');
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();

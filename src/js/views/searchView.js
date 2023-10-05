// we create the class, and we will then NOT export that class, but ecport an instance (object) that was created by this class

// this class is used to get the query and listen for the click event
class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    // the listener is added to the form, not to the button, because the form will listen to the submit event, so either button or pressing the enter key
    this._parentEl.addEventListener('submit', function (e) {
      // preventDefault() because otherwise the page is going to reload
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();

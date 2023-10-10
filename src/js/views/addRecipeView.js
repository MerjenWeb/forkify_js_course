import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  // COnstructor method
  constructor() {
    // Since this is a child class, we need to start by calling super(), and only after that we can use the this keywords
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr); // takes an array of entries and converts to object
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();

// Publisher - subscriber pattern for addeventlistener :
// that works by creating a publisher,  which is basically a function  which is the one listening for the event,  which receives a handler function,  which in our case, is going to be a controller  that lives in the controller.js.  With this,  we will then be able to listen for the event in the View where it makes sense, while at the same time, being able to handle that event from the controller.

import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      // closest method is like querySelector, but instead of searching down in the tree, it searches UP in the tree
      // creating a new controller that will be executed whenever a click happens
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
         <button data-goto=${
           curPage + 1
         } class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
   <button data-goto=${curPage - 1} class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    `;
    }

    // Other page
    if (curPage < numPages) {
      return `
      <button data-goto=${
        curPage - 1
      } class="btn--inline pagination__btn--prev">
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-left"></use>
         </svg>
         <span>Page ${curPage - 1}</span>
       </button>
       <button data-goto=${
         curPage + 1
       } class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
       `;
    }

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();

// Publisher - subscriber pattern for addeventlistener :
// that works by creating a publisher,  which is basically a function  which is the one listening for the event,  which receives a handler function,  which in our case, is going to be a controller  that lives in the controller.js.  With this,  we will then be able to listen for the event in the View where it makes sense, while at the same time, being able to handle that event from the controller.

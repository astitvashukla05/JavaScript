import previewView from './previewView.js';
import View from './view.js';

class BookmarkView extends View {
  _errMess = 'No bookmarks yet. Find a good recipe and bookmark it!';
  _mess = '';
  _parentEl = document.querySelector('.bookmarks__list');

  addHandler(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new BookmarkView();

import previewView from './previewView.js';
import View from './view.js';

class ResultView extends View {
  _errMess = 'No recipes found for your search. Please try again!';
  _mess = '';
  _parentEl = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultView();

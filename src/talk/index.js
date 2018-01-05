import talkView from './talk.html';
export class Talk {
  render(viewId) {
    document.getElementById(viewId).innerHTML = talkView;
  }
}

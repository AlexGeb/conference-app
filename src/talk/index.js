import talkView from './talk.html';
export class Talk {
  getView() {
    return Promise.resolve(talkView);
  }
}

export class TalkService {
  constructor() {
    this.endpoint = 'http://localhost:3000/';
  }
  findAllSpeakers() {
    return fetch(this.endpoint + 'speakers', { method: 'GET' }).then(resp =>
      resp.json()
    );
  }
  findAllSessions() {
    return fetch(this.endpoint + 'sessions', { method: 'GET' }).then(resp =>
      resp.json()
    );
  }
}

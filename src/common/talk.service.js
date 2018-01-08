export class TalkService {
  constructor() {
    this.endpoint = 'http://localhost:3000/';
    this.speakers = null;
    this.sessions = null;
  }
  findAllSpeakers() {
    return this.speakers
      ? Promise.resolve(this.speakers)
      : fetch(this.endpoint + 'speakers', { method: 'GET' })
          .then(resp => resp.json())
          .then(json => {
            this.speakers = json;
            return this.speakers;
          });
  }
  findAllSessions() {
    return this.sessions
      ? Promise.resolve(this.sessions)
      : fetch(this.endpoint + 'sessions', { method: 'GET' }).then(resp => {
          this.sessions = resp.json();
          return this.sessions;
        });
  }

  findSessionById(id) {
    return fetch(this.endpoint + 'sessions/' + id, { method: 'GET' }).then(
      resp => resp.json()
    );
  }

  findSpeakerById(id) {
    return fetch(this.endpoint + 'speakers/' + id, { method: 'GET' }).then(
      resp => resp.json()
    );
  }

  findSessionIdBySpeakerId(id_speaker) {
    return this.findAllSessions().then(resp =>
      resp
        .filter(sess => {
          return sess.speakers && sess.speakers.includes(id_speaker);
        })
        .map(sess => {
          return { id: sess.id, title: sess.title };
        })
    );
  }
}

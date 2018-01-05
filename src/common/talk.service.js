export class TalkService {
  findAllSpeakers() {
    return fetch('http://localhost:3000/speakers', { method: 'GET' }).then(
      resp => {
        return resp.json();
      }
    );
  }
}

export class NoteService {
  constructor() {
    this.prefix = 'sessions_';
  }

  save(session_id, note) {
    return Promise.resolve(
      localStorage.setItem(this.prefix + session_id, note)
    );
  }

  getNote(session_id) {
    return Promise.resolve(localStorage.getItem(this.prefix + session_id));
  }
  getAllNotes() {
    return Promise.resolve(
      Object.keys(localStorage)
        .filter(key => key.startsWith(this.prefix))
        .reduce((obj, key) => {
          obj[key.split('_')[1]] = localStorage.getItem(key);
          return obj;
        }, {})
    );
  }
}

export class NoteService {
  constructor() {
    this.prefix = 'sessions_';
  }

  async save(session_id, note) {
    return await localStorage.setItem(this.prefix + session_id, note);
  }

  async getNote(session_id) {
    return await localStorage.getItem(this.prefix + session_id);
  }
  async getAllNotes() {
    return await Object.keys(localStorage)
      .filter(key => key.startsWith(this.prefix))
      .reduce((obj, key) => {
        obj[key.split('_')[1]] = localStorage.getItem(key);
        return obj;
      }, {});
  }
}

import * as $ from 'jquery';
export class Notes {
  constructor(noteSvc) {
    this.noteSvc = noteSvc;
  }
  getView() {
    const sessionId = location.hash.split('/')[1];
    return this.noteSvc
      .getNote(sessionId)
      .then(note => this.getTemplateFromNote(note, sessionId));
  }

  getTemplateFromNote(note, sessId) {
    let template = `<h4>Mes notes</h4>
    <div class="row">
    <textarea id="note-input">${note ? note : ''}</textarea>
    <input hidden id="session-id" value=${sessId}>
    </div>
    <div class="row">
    <button id="save-note" class="btn btn-primary">Sauvegarder</button>
    </div>
    `;
    return template;
  }

  postRender() {
    let self = this;
    $('#save-note').click(function() {
      const sessId = $('#session-id').val();
      const note = $('#note-input').val();
      self.noteSvc.save(sessId, note).then(() => {
        console.log('done saving the notes');
      });
    });
  }
}

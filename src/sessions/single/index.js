export class SessionSingle {
  constructor(talkSvc) {
    this.talkSvc = talkSvc;
  }
  getView() {
    const sessionId = location.hash.split('/')[1];
    return this.talkSvc
      .findSessionById(sessionId)
      .then(this.getSpeakersInfo.bind(this))
      .then(this.getTemplateFromSession);
  }

  getSpeakersInfo(session) {
    const speakerPromises = [];
    session.speakers.forEach(spId => {
      speakerPromises.push(this.talkSvc.findSpeakerById(spId));
    });
    return Promise.all(speakerPromises).then(speakers => {
      session.speakersInfo = speakers;
      return session;
    });
  }
  getTemplateFromSession(session) {
    let template = `
    <h4 >${session.title}</h4>`;
    template += `<div class="container">
    <p class="text-justify">${session.desc}</p>
    <p><u>${session.confRoom}</u></p>
    <p><strong> Les présentateurs : </strong></p>
    <ul>`;
    session.speakersInfo.forEach(sp => {
      template += `<li><a href=#speakers-list/${sp.id}>${sp.firstname} ${
        sp.lastname
      }</a></li>`;
    });
    template += `</ul>
    <a class="btn btn-primary" href="#notes/${session.id}">Mes notes</a>
    </div>`;
    return template;
  }
}

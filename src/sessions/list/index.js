export class SessionList {
  constructor(talkSvc) {
    this.talkSvc = talkSvc;
  }

  render(idView) {
    this.talkSvc.findAllSessions().then(sessions => {
      let listOfSess = `<ul class="list-group">`;
      sessions.forEach(sess => {
        listOfSess += `<li class="list-group-item"><a href="${location.hash}/${
          sess.id
        }"> ${sess.title} </a></li>`;
      });
      listOfSess += `</ul>`;
      document.getElementById(idView).innerHTML = listOfSess;
    });
  }
}

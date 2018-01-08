export class SessionList {
  constructor(talkSvc) {
    this.talkSvc = talkSvc;
  }

  getView() {
    return this.talkSvc.findAllSessions().then(sessions => {
      let listOfSess = `<ul class="list-group">`;
      sessions.forEach((sess, index) => {
        listOfSess += `<li class="list-group-item">${index}. <a href="${
          location.hash
        }/${sess.id}"> ${sess.title} </a></li>`;
      });
      listOfSess += `</ul>`;
      return listOfSess;
    });
  }
}

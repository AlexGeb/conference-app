export class SpeakerList {
  constructor(talkSvc) {
    this.talkSvc = talkSvc;
  }

  getView() {
    return this.talkSvc.findAllSpeakers().then(speakers => {
      let listOfSpeakers = `<ul class="list-group">`;
      speakers.forEach(sp => {
        listOfSpeakers += `<li class="list-group-item"><a href="${
          location.hash
        }/${sp.id}"> ${sp.firstname} ${sp.lastname} </a></li>`;
      });
      listOfSpeakers += `</ul>`;
      return listOfSpeakers;
    });
  }
}

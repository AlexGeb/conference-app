export class SpeakerList {
  constructor(talkSvc) {
    this.talkSvc = talkSvc;
  }

  render(idView) {
    this.talkSvc.findAllSpeakers().then(speakers => {
      let listOfSpeakers = `<ul class="list-group">`;
      speakers.forEach(sp => {
        listOfSpeakers += `<li class="list-group-item"> ${sp.firstname} ${
          sp.lastname
        } </li>`;
      });
      listOfSpeakers += `</ul>`;
      document.getElementById(idView).innerHTML = listOfSpeakers;
    });
  }
}

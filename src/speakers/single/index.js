export class SpeakerSingle {
  constructor(talkSvc) {
    this.talkSvc = talkSvc;
  }
  getView() {
    const speakerId = location.hash.split('/')[1];
    return this.talkSvc
      .findSpeakerById(speakerId)
      .then(this.getSpeakerInfo.bind(this))
      .then(this.getTemplateFromSpeaker);
  }
  getSpeakerInfo(speaker) {
    return this.talkSvc.findSessionIdBySpeakerId(speaker.id).then(sess => {
      speaker.presentations = sess;
      return speaker;
    });
  }

  getTemplateFromSpeaker(speaker) {
    let template = `<div class="container">
    <h4>${speaker.lastname.toUpperCase()} ${speaker.firstname}</h4>
    <img class="speaker-img" src="https://raw.githubusercontent.com/2017-D17/conference-app-images/master/images/${
      speaker.image
    }">`;
    template += `
    <p class="text-justify">${speaker.about}</p>
    <p> <strong>Ses présentations : </strong> </p>
    <ul>`;
    speaker.presentations.forEach(pres => {
      template += `<li><a href=#sessions-list/${pres.id}>${
        pres.title
      }</a></li>`;
    });
    template += `</ul></div>`;
    return template;
  }
}

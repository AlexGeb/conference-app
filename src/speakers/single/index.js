export class SpeakerComponent {
  constructor(speaker) {
    this.speaker = speaker;
  }
  render(viewId) {
    document.getElementById(viewId).innerHTML = `
    <div class="card">${this.speaker.id}</div>
    `;
  }
}

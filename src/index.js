import { TalkService } from './common/talk.service';
alert('Conférence App démarré !');
const talkSvc = new TalkService();

talkSvc.findAllSpeakers().then(
  resp => {
    console.log(resp);
  },
  err => {
    console.log(err);
  }
);

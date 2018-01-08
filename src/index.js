import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import $ from 'jquery';

import { TalkService } from './common/talk.service';
import { NoteService } from './common/note.service';
import { Layout } from './layout';
import { SpeakerList } from './speakers/list';
import { SessionList } from './sessions/list';
import { SessionSingle } from './sessions/single';
import { SpeakerSingle } from './speakers/single';
import { Notes } from './notes/notes';
import { Talk } from './talk';
import { Router } from './common/router';
import { templator } from './common/templator';

const router = new Router(templator, 'main-view');

const layout = new Layout();
const talk = new Talk();
const talkSvc = new TalkService();
const noteSvc = new NoteService();
const speakerList = new SpeakerList(talkSvc);
const sessionList = new SessionList(talkSvc);
const sessionSingle = new SessionSingle(talkSvc);
const speakerSingle = new SpeakerSingle(talkSvc);
const notes = new Notes(noteSvc);
// load the initial view
layout.render();

// route registration
router.route('speakers-list', speakerList);
router.route('sessions-list', sessionList);
router.route('sessions-list/:id', sessionSingle);
router.route('speakers-list/:id', speakerSingle);
router.route('notes/:id', notes);
router.route('/', talk);

window.addEventListener('load', () => {
  manageHashChangeForNav();
  window.onhashchange = () => {
    manageHashChangeForNav();
    router.router();
  };
  router.router();
});

console.log(router);
function manageHashChangeForNav() {
  $('nav a').removeClass('active');
  if (location.hash.startsWith('#speakers-list')) {
    $(`nav a#speakers-list-id`).addClass('active');
  } else if (location.hash.startsWith('#sessions-list')) {
    $(`nav a#sessions-list-id`).addClass('active');
  } else if (location.hash == '' || location.hash == '#') {
    $(`nav a#accueil`).addClass('active');
  }
}

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import { TalkService } from './common/talk.service';
import { Layout } from './layout';
import { SpeakerList } from './speakers/list';
import { SessionList } from './sessions/list';
import { Talk } from './talk';

const layout = new Layout();
const talk = new Talk();
const talkSvc = new TalkService();
const speakerList = new SpeakerList(talkSvc);
const sessionList = new SessionList(talkSvc);

layout.render();

const router = () => {
  $('nav a').removeClass('active');
  if (location.hash == '#speakers-list') {
    $(`nav a${location.hash}-id`).addClass('active');
    speakerList.render('main-view');
  } else if (location.hash == '#sessions-list') {
    $(`nav a${location.hash}-id`).addClass('active');
    sessionList.render('main-view');
  } else {
    location.hash;
    $(`nav a#accueil`).addClass('active');
    talk.render('main-view');
  }
};

window.addEventListener('load', () => {
  window.onhashchange = () => {
    router();
  };
  router();
});

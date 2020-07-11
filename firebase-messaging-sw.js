importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '581326886241'
});
const messaging = firebase.messaging();


*ngFor="let message of messages"
routerLink="/notificationchat/{{message.thread_id}}"